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
  collections: null,
  loading: false,
  error: null
};

// addItemInArray

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return updateObject(state, {
        collections: action.payload,
        loading: false
      });
    case ADD_COLLECTION:
      // return {
      //   ...state,
      //   collections: [...state.collections, action.payload],
      //   loading: false
      // };

      const newCollection = addItemToArray(state.collections, action.payload);
      return updateObject(state, {
        collections: newCollection,
        loading: false
      });
    case DELETE_COLLECTION:
      // return {
      //   ...state,
      //   collections: state.collections.filter(
      //     collection => collection.id !== action.payload
      //   ),
      //   loading: false
      // };
      const deletedItem = deleteItemFromArray(
        state.collections,
        action.payload
      );
      return updateObject(state, {
        collections: deletedItem,
        loading: false
      });
    case UPDATE_COLLECTION:
      // return {
      //   ...state,
      //   collections: state.collections.map(collection =>
      //     collection.id === action.payload.id ? action.payload : collection
      //   ),
      //   loading: false
      // };
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
