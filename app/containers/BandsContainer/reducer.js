// action types
const SIMILAR_BANDS_SUCCESS =
  'app/containers/BandsContainer/SIMILAR_BANDS_SUCCESS';
const SIMILAR_BANDS_FAILURE =
  'app/containers/BandsContainer/SIMILAR_BANDS_FAILURE';
const TOP_BANDS_SUCCESS = 'app/containers/BandsContainer/TOP_BANDS_SUCCESS';
const TOP_BANDS_FAILURE = 'app/containers/BandsContainer/TOP_BANDS_FAILURE';

// reducer with initial state
const initialState = {
  similar: [],
  top: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIMILAR_BANDS_SUCCESS:
      return { ...state, similar: action.similar };
    case SIMILAR_BANDS_FAILURE:
      return {
        ...state,
        similar: initialState.similar,
        error: action.error,
      };
    case TOP_BANDS_SUCCESS:
      return { ...state, top: action.top };
    case TOP_BANDS_FAILURE:
      return {
        ...state,
        top: initialState.top,
        error: action.error,
      };
    default:
      return state;
  }
}

// actions
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

export const getTopBandsIds = state => getBands(state).top.map(band => band.id);

export const getSimilarBands = state => getBands(state).similar;
