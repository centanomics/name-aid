import {
  GET_COLLECTIONS,
  COLLECTIONS_ERROR,
  SET_LOADING,
  ADD_COLLECTION,
  DELETE_COLLECTION,
  UPDATE_COLLECTION
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
      payload: err.response
    });
  }
};

// add a collection

export const addCollection = collection => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      'https://endpoint.yourcode.app/semyers189/api/collections',
      {
        method: 'POST',
        body: JSON.stringify(collection),
        headers: { 'Content-Type': 'application/json' }
      }
    );
    const data = await res.json();
    dispatch({
      type: ADD_COLLECTION,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: COLLECTIONS_ERROR,
      payload: err.response
    });
  }
};

// delete a collection

export const deleteCollection = id => async dispatch => {
  try {
    setLoading();
    await fetch(
      `https://endpoint.yourcode.app/semyers189/api/collections/${id}`,
      {
        method: 'DELETE'
      }
    );
    dispatch({
      type: DELETE_COLLECTION,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: COLLECTIONS_ERROR,
      payload: err.response
    });
  }
};

// update a collection

export const updateCollection = collection => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `https://endpoint.yourcode.app/semyers189/api/collections/${collection.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(collection),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = await res.json();
    console.log(data);
    dispatch({
      type: UPDATE_COLLECTION,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: COLLECTIONS_ERROR,
      payload: err.response
    });
  }
};
