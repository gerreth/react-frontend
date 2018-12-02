// action types
export const DISLIKE = 'app/containers/UserContainer/DISLIKE';
export const LIKE = 'app/containers/UserContainer/LIKE';
export const USER_FAILURE = 'app/containers/UserContainer/USER_FAILURE';
export const USER_SUCCESS = 'app/containers/UserContainer/USER_SUCCESS';

// reducer with initial state
const initialState = {
  dislikes: [],
  likes: [],
  spotify: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DISLIKE:
      return setDislike(state, action);
    case LIKE:
      return setLike(state, action);
    case USER_FAILURE:
      return setUserFailure(state, action);
    case USER_SUCCESS:
      return setUserSuccess(state, action);
    default:
      return state;
  }
}

//
const setDislike = (state, action) => {
  const dislikes = [...state.dislikes, action.band];
  return { ...state, dislikes: dislikes };
};

const setLike = (state, action) => {
  const likes = [...state.likes, action.band];
  return { ...state, likes: likes };
};

const setUserSuccess = (state, action) => {
  const spotify = action.user;
  return { ...state, spotify: spotify };
};

const setUserFailure = (state, action) => {
  const error = action.error;
  return { ...state, error: error };
};

// actions
export const userSuccess = user => ({
  type: USER_SUCCESS,
  user,
});

export const userFailure = error => ({
  type: USER_FAILURE,
  error,
});

export const dislike = band => ({
  band,
  type: DISLIKE,
});

export const like = band => ({
  band,
  type: LIKE,
});

// selectors
export const getUser = state => state.get('user');

export const getUserId = state => getUser(state).spotify.id;
