import axios from 'axios';
import {
  GET_SHARED,
  ADD_SHARED,
  DELETE_SHARED,
  SET_LOADING,
  SHARE_ERROR
} from './types';

const api = process.env.API_URL || 'http://localhost:9000';

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// get shared items from user id

export const getShared = () => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axios.get(`${api}/api/shared`);
    dispatch({
      type: GET_SHARED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHARE_ERROR,
      payload: err
    });
  }
};

// add shared item

export const addShared = collectionId => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axios.post(`${api}/api/shared/${collectionId}`);
    console.log(res.data.collection, res.data.terms);
    dispatch({
      type: ADD_SHARED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHARE_ERROR,
      payload: err
    });
  }
};

// remove item from shared list

export const deleteShared = id => async dispatch => {
  try {
    dispatch(setLoading());
    // await fetch(`https://endpoint.yourcode.app/semyers189/api/shares/${id}`, {
    //   method: 'DELETE'
    // });
    await axios.delete(`${api}/api/shared/${id}`);
    dispatch({
      type: DELETE_SHARED,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: SHARE_ERROR,
      payload: err
    });
  }
};
