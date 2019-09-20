// normalized reducer

import {
  updateObject,
  addItemToArray,
  deleteItemFromArray,
  updateItemInArray
} from './utility';

const initialState = {
  collections: [],
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

const getCollections = (state, action) => {
  return updateObject(state, {
    collections: action.payload,
    loading: false
  });
};

// add

const addCollection = (state, action) => {
  const newCollection = addItemToArray(state.collections, action.payload);
  return updateObject(state, {
    collections: newCollection,
    loading: false
  });
};

// delete

const deleteCollection = (state, action) => {
  const deletedItem = deleteItemFromArray(state.collections, action.payload);
  return updateObject(state, {
    collections: deletedItem,
    loading: false
  });
};

// update

const updateCollection = (state, action) => {
  const updatedItem = updateItemInArray(
    state.collections,
    action.payload.id,
    collection => {
      return updateObject(collection, { name: action.payload.name });
    }
  );
  return updateObject(state, {
    collections: updatedItem,
    loading: false
  });
};

// error

const errors = (state, action) => {
  // eslint-disable-next-line no-console
  console.error(action.payload);
  return updateObject(state, {
    error: action.payload
  });
};

// set loading
const setLoading = state => {
  return updateObject(state, {
    loading: true
  });
};

const collectionReducer = createReducer([], {
  GET_COLLECTIONS: getCollections,
  ADD_COLLECTION: addCollection,
  DELETE_COLLECTION: deleteCollection,
  UPDATE_COLLECTION: updateCollection,
  COLLECTIONS_ERROR: errors,
  SET_COLLECTION_LOADING: setLoading
});

export default (state = initialState, action) => {
  return collectionReducer(state, action);
};
