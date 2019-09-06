import {
  GET_TERMS,
  ADD_TERM,
  DELETE_TERM,
  UPDATE_TERM,
  SET_LOADING,
  TERMS_ERROR
} from '../actions/types';

const initialState = {
  terms: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TERMS:
      return {
        ...state,
        terms: action.payload,
        loading: false
      };
    case ADD_TERM:
    case DELETE_TERM:
    case UPDATE_TERM:
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TERMS_ERROR:
      // eslint-disable-next-line no-console
      console.error(action.payload);
      return {
        err: action.payload
      };
    default:
      return state;
  }
};
