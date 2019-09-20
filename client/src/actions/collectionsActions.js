import {
  GET_COLLECTIONS,
  COLLECTIONS_ERROR,
  SET_COLLECTION_LOADING,
  ADD_COLLECTION,
  DELETE_COLLECTION,
  UPDATE_COLLECTION
} from './types';

// sets loading to true
export const setLoading = () => {
  return {
    type: SET_COLLECTION_LOADING
  };
};

// get collections

export const getCollections = () => async dispatch => {
  let data;
  try {
    dispatch(setLoading());
    const res = await fetch(
      'https://endpoint.yourcode.app/semyers189/api/collections'
    );
    data = await res.json();
  } catch (err) {
    dispatch({
      type: COLLECTIONS_ERROR,
      payload: err
    });
  }
  dispatch({
    type: GET_COLLECTIONS,
    payload: data
  });
};

// add a collection

export const addCollection = collection => async dispatch => {
  let data;
  try {
    dispatch(setLoading());
    const res = await fetch(
      'https://endpoint.yourcode.app/semyers189/api/collections',
      {
        method: 'POST',
        body: JSON.stringify(collection),
        headers: { 'Content-Type': 'application/json' }
      }
    );
    data = await res.json();
  } catch (err) {
    dispatch({
      type: COLLECTIONS_ERROR,
      payload: err.response
    });
  }
  dispatch({
    type: ADD_COLLECTION,
    payload: data
  });
};

// delete a collection

export const deleteCollection = id => async dispatch => {
  try {
    dispatch(setLoading());
    await fetch(
      `https://endpoint.yourcode.app/semyers189/api/collections/${id}`,
      {
        method: 'DELETE'
      }
    );
  } catch (err) {
    dispatch({
      type: COLLECTIONS_ERROR,
      payload: err.response
    });
  }
  dispatch({
    type: DELETE_COLLECTION,
    payload: id
  });
};

// update a collection

export const updateCollection = collection => async dispatch => {
  let data;
  try {
    dispatch(setLoading());
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
    data = await res.json();
  } catch (err) {
    dispatch({
      type: COLLECTIONS_ERROR,
      payload: err.response
    });
  }
  dispatch({
    type: UPDATE_COLLECTION,
    payload: data
  });
};
