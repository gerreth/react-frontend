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
      return { ...state, dislikes: [...state.dislikes, action.band] };
    case LIKE:
      return { ...state, likes: [...state.likes, action.band] };
    case USER_SUCCESS:
      return { ...state, spotify: action.user };
    case USER_FAILURE:
      return {
        ...state,
        spotify: initialState.user,
        error: action.error,
      };
    default:
      return state;
  }
}

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
