import {
  GET_COLLECTIONS,
  ADD_COLLECTION,
  DELETE_COLLECTION,
  UPDATE_COLLECTION,
  COLLECTIONS_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  collections: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
        loading: false
      };
    case ADD_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, action.payload],
        loading: false
      };
    case DELETE_COLLECTION:
      return {
        ...state,
        collections: state.collections.filter(
          collection => collection.id !== action.payload
        ),
        loading: false
      };
    case UPDATE_COLLECTION:
    case COLLECTIONS_ERROR:
      // eslint-disable-next-line no-console
      console.error(action.payload);
      return {
        err: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
