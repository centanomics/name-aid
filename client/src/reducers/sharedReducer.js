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
    case ADD_SHARED:
    case DELETE_SHARED:
    case SET_LOADING:
    case SHARE_ERROR:
    default:
      return state;
  }
};
