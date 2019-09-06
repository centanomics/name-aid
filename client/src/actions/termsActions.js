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
  try {
    setLoading();
    const res = await fetch(
      'https://endpoint.yourcode.app/semyers189/api/terms'
    );
    const data = await res.json();
    const output = await data.filter(term => term.collectionId === Number(id));
    dispatch({
      type: GET_TERMS,
      payload: output
    });
  } catch (err) {
    dispatch({
      type: TERMS_ERROR,
      payload: err.response.statusText
    });
  }
};

// adds a term

// deletes a term

// updates a term
