import { takeLatest, call, select, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import querystring from 'querystring';

import backendClient from 'clients/backend';
import spotify from 'clients/spotify';

import { apiCallFinish, API_CALL_REQUEST, tokenSuccess } from './reducer';

import {
  similarBandsSuccess,
  similarBandsFailure,
  topBandsSuccess,
  topBandsFailure,
  getTopBandsIds,
} from '../BandsContainer/reducer';

import { getUserId, userSuccess, userFailure } from '../UserContainer/reducer';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  // yield takeLatest(API_CALL_REQUEST, implicitStrategy);
  yield takeLatest(API_CALL_REQUEST, codeStratgey);
}

//
function* commonSaga(token) {
  yield put(tokenSuccess(token));

  try {
    const response = yield call(spotify(token).me);

    yield put(userSuccess(response.data));
  } catch (error) {
    yield put(userFailure(error));
  }

  const userId = yield select(getUserId);

  try {
    const response = yield call(backendClient().fetchTopBands, token, userId);

    yield put(topBandsSuccess(response.data));
  } catch (error) {
    yield put(topBandsFailure(error));
  }

  const ids = yield select(getTopBandsIds);

  try {
    const response = yield call(
      backendClient().fetchSimilarBands,
      token,
      ids,
      userId,
    );

    yield put(similarBandsSuccess(response.data));
  } catch (error) {
    yield put(similarBandsFailure(error));
  }

  yield put(apiCallFinish());

  yield put(push('/bands'));
}

// worker saga: makes the api call when watcher saga sees the action
function* implicitStrategy() {
  const parsedHash = querystring.parse(location.hash);
  const token = parsedHash['#access_token'];

  yield commonSaga(token);
}

// worker saga: makes the api call when watcher saga sees the action
function* codeStratgey() {
  const parsedQuery = querystring.parse(location.search);
  const code = parsedQuery['?code'];
  const result = yield backendClient().getAuth(code);

  yield commonSaga(result.data);
}
