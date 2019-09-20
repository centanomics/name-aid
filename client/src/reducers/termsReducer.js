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

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
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

// error

const errors = (state, action) => {
  // eslint-disable-next-line no-console
  console.error(action.payload);
  return updateObject(state, {
    err: action.payload
  });
};

// set loading
const setLoading = state => {
  return updateObject(state, {
    loading: true
  });
};

const termReducer = createReducer([], {
  GET_TERMS: getTerms,
  ADD_TERM: addTerm,
  DELETE_TERM: deleteTerm,
  UPDATE_TERM: updateTerm,
  SET_LOADING: setLoading,
  TERMS_ERROR: errors
});

export default (state = initialState, action) => {
  return termReducer(state, action);
};
