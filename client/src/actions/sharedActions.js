import {
  GET_SHARED,
  ADD_SHARED,
  DELETE_SHARED,
  SET_LOADING,
  SHARE_ERROR
} from './types';

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// get shared items from user id

export const getShared = id => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `https://endpoint.yourcode.app/semyers189/api/shares?userId=${id}`
    );
    const data = await res.json();
    dispatch({
      type: GET_SHARED,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: SHARE_ERROR,
      payload: err.response
    });
  }
};

// add shared item

export const addShared = sharedCollection => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      'https://endpoint.yourcode.app/semyers189/api/shares',
      {
        method: 'POST',
        body: JSON.stringify(sharedCollection),
        headers: { 'Content-Type': 'application/json' }
      }
    );
    const data = await res.json();
    dispatch({
      type: ADD_SHARED,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: SHARE_ERROR,
      payload: err.response
    });
  }
};

// remove item from shared list

export const deleteShared = id => async dispatch => {
  try {
    setLoading();
    await fetch(`https://endpoint.yourcode.app/semyers189/api/shares/${id}`, {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_SHARED,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: SHARE_ERROR,
      payload: err.response
    });
  }
};
