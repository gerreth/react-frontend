// action types
export const API_CALL_REQUEST = 'app/containers/Callback/API_CALL_REQUEST';
const API_CALL_FINISH = 'app/containers/Callback/API_CALL_FINISH';
const TOKEN_SUCCESS = 'app/containers/Callback/TOKEN_SUCCESS';
const TOKEN_FAILURE = 'app/containers/Callback/TOKEN_FAILURE';

// reducer with initial state
const initialState = {
  fetching: false,
  token: undefined,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_FINISH:
      return { ...state, fetching: false, error: null };
    case TOKEN_FAILURE:
      return { ...state, token: initialState.token, error: action.error };
    case TOKEN_SUCCESS:
      return { ...state, token: action.token };
    default:
      return state;
  }
}

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
