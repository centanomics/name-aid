import axios from 'axios';
// import API from '../utils/API';
import {
  GET_COLLECTIONS,
  COLLECTIONS_ERROR,
  SET_COLLECTION_LOADING,
  ADD_COLLECTION,
  DELETE_COLLECTION,
  UPDATE_COLLECTION,
  SET_CURRENT
} from './types';
import setAuthToken from '../utils/setAuthToken';

const api = process.env.API_URL || 'http://localhost:9000';

// sets loading to true
export const setLoading = () => {
  return {
    type: SET_COLLECTION_LOADING
  };
};

// get collections

export const getCollections = () => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    dispatch(setLoading());
    const res = await axios.get(`${api}/api/collections`);
    dispatch({
      type: GET_COLLECTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COLLECTIONS_ERROR,
      payload: err.toString()
    });
  }
};

// add a collection

export const addCollection = collection => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  const { name } = collection;
  try {
    dispatch(setLoading());
    const { data } = await axios.post(`${api}/api/collections`, {
      name
    });
    dispatch({
      type: ADD_COLLECTION,
      payload: data.newCollection
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
    dispatch(setLoading());
    await axios.delete(`${api}/api/collections/${id}`);
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
  const { name } = collection;
  try {
    dispatch(setLoading());
    const res = await axios.put(`${api}/api/collections/${collection.id}`, {
      name
    });
    dispatch({
      type: UPDATE_COLLECTION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COLLECTIONS_ERROR,
      payload: err.response
    });
  }
};

// set current collection
export const setCurrentCollection = collection => async dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: collection
  });
};
