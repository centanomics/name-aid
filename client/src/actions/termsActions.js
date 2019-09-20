/* eslint-disable import/prefer-default-export */
import {
  GET_TERMS,
  ADD_TERM,
  DELETE_TERM,
  UPDATE_TERM,
  SET_LOADING,
  TERMS_ERROR
} from './types';

// sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// gets terms

export const getTerms = id => async dispatch => {
  let output;
  try {
    dispatch(setLoading());
    const res = await fetch(
      'https://endpoint.yourcode.app/semyers189/api/terms'
    );
    const data = await res.json();
    output = await data.filter(term => term.collectionId === Number(id));
  } catch (err) {
    dispatch({
      type: TERMS_ERROR,
      payload: err.response.statusText
    });
  }
  dispatch({
    type: GET_TERMS,
    payload: output
  });
};

// adds a term
export const addTerm = term => async dispatch => {
  let data;
  try {
    dispatch(setLoading());
    const res = await fetch(
      'https://endpoint.yourcode.app/semyers189/api/terms',
      {
        method: 'POST',
        body: JSON.stringify(term),
        headers: { 'Content-Type': 'application/json' }
      }
    );
    data = await res.json();
  } catch (err) {
    dispatch({
      type: TERMS_ERROR,
      payload: err.response.statusText
    });
  }
  dispatch({
    type: ADD_TERM,
    payload: data
  });
};

// deletes a term

export const deleteTerm = id => async dispatch => {
  try {
    dispatch(setLoading());
    await fetch(`https://endpoint.yourcode.app/semyers189/api/terms/${id}`, {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_TERM,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TERMS_ERROR,
      payload: err.response.statusText
    });
  }
};

// updates a term

export const updateTerm = term => async dispatch => {
  let data;
  try {
    dispatch(setLoading());
    const res = await fetch(
      `https://endpoint.yourcode.app/semyers189/api/terms/${term.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(term),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    data = await res.json();
  } catch (err) {
    dispatch({
      type: TERMS_ERROR,
      payload: err.response
    });
  }
  dispatch({
    type: UPDATE_TERM,
    payload: data
  });
};
