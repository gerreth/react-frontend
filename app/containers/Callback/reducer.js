// action types
export const API_CALL_REQUEST = 'app/containers/Callback/API_CALL_REQUEST';
export const API_CALL_FINISH = 'app/containers/Callback/API_CALL_FINISH';
export const TOKEN_SUCCESS = 'app/containers/Callback/TOKEN_SUCCESS';
export const TOKEN_FAILURE = 'app/containers/Callback/TOKEN_FAILURE';

// reducer with initial state
const initialState = {
  fetching: false,
  token: undefined,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return initApiCall(state, action);
    case API_CALL_FINISH:
      return endApiCall(state, action);
    case TOKEN_FAILURE:
      return setTokenFailure(state, action);
    case TOKEN_SUCCESS:
      return setTokenSuccess(state, action);
    default:
      return state;
  }
}
//
const initApiCall = state => {
  return { ...state, fetching: true, error: null };
};

const endApiCall = state => {
  return { ...state, fetching: false, error: null };
};

const setTokenFailure = (state, action) => {
  const error = action.error;

  return { ...state, error: error };
};

const setTokenSuccess = (state, action) => {
  const token = action.token;

  return { ...state, token: token };
};

// actions
export const apiCallFinish = () => ({
  type: API_CALL_FINISH,
});

export const apiCallRequest = () => ({
  type: API_CALL_REQUEST,
});

export const tokenSuccess = token => ({
  type: TOKEN_SUCCESS,
  token,
});

export const tokenFailure = error => ({
  type: TOKEN_FAILURE,
  error,
});

// selectors
const getSpotify = state => state.get('spotify');

export const getToken = state => getSpotify(state).token;
