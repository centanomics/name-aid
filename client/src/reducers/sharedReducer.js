import {
  GET_SHARED,
  ADD_SHARED,
  DELETE_SHARED,
  SET_LOADING,
  SHARE_ERROR
} from '../actions/types';

const initialState = {
  loading: false,
  sharedCollections: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHARED:
      return {
        ...state,
        sharedCollections: action.payload,
        loading: false
      };
    case ADD_SHARED:
      return {
        ...state,
        sharedCollections: [...state.sharedCollections, action.payload],
        loading: false
      };
    case DELETE_SHARED:
      return {
        ...state,
        sharedCollections: state.sharedCollections.filter(
          shared => shared.id !== action.payload
        ),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SHARE_ERROR:
      // eslint-disable-next-line no-console
      console.error(action.payload);
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};
