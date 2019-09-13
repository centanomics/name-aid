import {
  GET_SHARED,
  ADD_SHARED,
  DELETE_SHARED,
  SET_LOADING,
  SHARE_ERROR
} from '../actions/types';

import { updateObject, addItemToArray, deleteItemFromArray } from './utility';

const initialState = {
  loading: false,
  sharedCollections: [],
  error: null
};

// get

const getShared = (state, action) => {
  return updateObject(state, {
    sharedCollections: action.payload,
    loading: false
  });
};

// add

const addShared = (state, action) => {
  const newCollection = addItemToArray(state.collections, action.payload);
  return updateObject(state, {
    sharedCollections: newCollection,
    loading: false
  });
};

// delete

const deleteShared = (state, action) => {
  const deletedItem = deleteItemFromArray(state.collections, action.payload);
  return updateObject(state, {
    sharedCollections: deletedItem,
    loading: false
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHARED:
      return getShared(state, action);
    case ADD_SHARED:
      return addShared(state, action);
    case DELETE_SHARED:
      return deleteShared(state, action);
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
