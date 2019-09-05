/* eslint-disable import/prefer-default-export */
import {
  GET_COLLECTIONS,
  // ADD_COLLECTION,
  // DELETE_COLLECTION,
  // UPDATE_COLLECTION,
  COLLECTIONS_ERROR,
  SET_LOADING
} from './types';

// sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// get collections

export const getCollections = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      'https://endpoint.yourcode.app/semyers189/api/collections'
    );
    const data = await res.json();
    dispatch({
      type: GET_COLLECTIONS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: COLLECTIONS_ERROR,
      payload: err.response.statusText
    });
  }
};

// add a collection

// delete a collection

// update a collection
