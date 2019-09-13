// normalized reducer
import {
  GET_COLLECTIONS,
  ADD_COLLECTION,
  DELETE_COLLECTION,
  UPDATE_COLLECTION,
  COLLECTIONS_ERROR,
  SET_LOADING
} from '../actions/types';

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

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return getCollections(state, action);
    case ADD_COLLECTION:
      return addCollection(state, action);
    case DELETE_COLLECTION:
      return deleteCollection(state, action);
    case UPDATE_COLLECTION:
      return updateCollection(state, action);
    case COLLECTIONS_ERROR:
      // eslint-disable-next-line no-console
      console.error(action.payload);
      return {
        ...state,
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
