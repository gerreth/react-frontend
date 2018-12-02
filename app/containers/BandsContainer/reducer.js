import { shuffle } from 'lodash';
// action types
export const DELETE_SIMILAR_BAND =
  'app/containers/BandsContainer/DELETE_SIMILAR_BAND';
export const LIKE_OR_DISLIKE = 'app/containers/BandsContainer/LIKE_OR_DISLIKE';
export const SIMILAR_BANDS_SUCCESS =
  'app/containers/BandsContainer/SIMILAR_BANDS_SUCCESS';
export const SIMILAR_BANDS_FAILURE =
  'app/containers/BandsContainer/SIMILAR_BANDS_FAILURE';
export const TOP_BANDS_SUCCESS =
  'app/containers/BandsContainer/TOP_BANDS_SUCCESS';
export const TOP_BANDS_FAILURE =
  'app/containers/BandsContainer/TOP_BANDS_FAILURE';

// reducer with initial state
const initialState = {
  similar: [],
  top: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_SIMILAR_BAND:
      return removeSimilarBand(state, action);
    case SIMILAR_BANDS_SUCCESS:
      return setSimilarBands(state, action);
    case SIMILAR_BANDS_FAILURE:
      return setSimilarBandsFailure(state, action);
    case TOP_BANDS_SUCCESS:
      return setTopBands(state, action);
    case TOP_BANDS_FAILURE:
      return setTopBandsFailure(state, action);
    default:
      return state;
  }
}

//
const removeSimilarBand = (state, action) => {
  const band = action.band;
  const similar = [...state.similar];

  const index = similar.findIndex(_ => _.id === band.id);

  similar.splice(index, 1);

  return { ...state, similar: similar };
};

const setSimilarBands = (state, action) => {
  return { ...state, similar: shuffle(action.similar) };
};

const setSimilarBandsFailure = (state, action) => {
  return { ...state, error: action.error };
};

const setTopBands = (state, action) => {
  return { ...state, top: action.top };
};

const setTopBandsFailure = (state, action) => {
  return { ...state, error: action.error };
};

// saga triggering actions
export const likeOrDislike = (band, like) => ({
  type: LIKE_OR_DISLIKE,
  band,
  like,
});

// actions
export const deleteSimilarBand = band => ({
  type: DELETE_SIMILAR_BAND,
  band,
});

export const topBandsSuccess = top => ({
  type: TOP_BANDS_SUCCESS,
  top,
});

export const topBandsFailure = error => ({
  type: TOP_BANDS_FAILURE,
  error,
});

export const similarBandsSuccess = similar => ({
  type: SIMILAR_BANDS_SUCCESS,
  similar,
});

export const similarBandsFailure = error => ({
  type: SIMILAR_BANDS_FAILURE,
  error,
});

// selectors
const getBands = state => state.get('bands');

export const getSimilarBands = state => getBands(state).similar;
export const getTopBands = state => getBands(state).top;

export const getTopBandsIds = state => getTopBands(state).map(band => band.id);
