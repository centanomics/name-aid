import {
  GET_TERMS,
  ADD_TERM,
  DELETE_TERM,
  UPDATE_TERM,
  SET_LOADING,
  TERMS_ERROR
} from '../actions/types';

import {
  updateObject,
  addItemToArray,
  deleteItemFromArray,
  updateItemInArray
} from './utility';

const initialState = {
  terms: [],
  loading: false,
  error: null
};

// get

const getTerms = (state, action) => {
  return updateObject(state, {
    terms: action.payload,
    loading: false
  });
};

// add

const addTerm = (state, action) => {
  const newterm = addItemToArray(state.terms, action.payload);
  return updateObject(state, {
    terms: newterm,
    loading: false
  });
};

// delete

const deleteTerm = (state, action) => {
  const deletedItem = deleteItemFromArray(state.terms, action.payload);
  return updateObject(state, {
    terms: deletedItem,
    loading: false
  });
};

// update

const updateTerm = (state, action) => {
  const updatedItem = updateItemInArray(
    state.terms,
    action.payload.id,
    term => {
      return updateObject(term, {
        name: action.payload.name,
        origin: action.payload.origin
      });
    }
  );
  return updateObject(state, {
    terms: updatedItem,
    loading: false
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TERMS:
      return getTerms(state, action);
    case ADD_TERM:
      return addTerm(state, action);
    case DELETE_TERM:
      return deleteTerm(state, action);
    case UPDATE_TERM:
      return updateTerm(state, action);
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TERMS_ERROR:
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
