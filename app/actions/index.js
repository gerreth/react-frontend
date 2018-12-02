import history from 'utils/history';
import configureStore from '../configureStore';

import { dislike, like } from 'containers/UserContainer/reducer';
import { deleteSimilarBand } from 'containers/BandsContainer/reducer';

const initialState = {};

const { store, persistor } = configureStore(initialState, history);

export const likeItOrNot = (band, flag) => {
  const unsubscribe = store.subscribe(() => console.log(store.getState()));

  if (flag) {
    store.dispatch(like(band));
  } else {
    store.dispatch(dislike(band));
  }
  store.dispatch(deleteSimilarBand(band));

  unsubscribe();
};
