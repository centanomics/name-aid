/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_TERMS,
  ADD_TERM,
  DELETE_TERM,
  UPDATE_TERM,
  SET_LOADING,
  TERMS_ERROR
} from './types';

const api = process.env.API_URL || 'http://localhost:9000';

// sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// gets terms

export const getTerms = id => async dispatch => {
  try {
    dispatch(setLoading());
    // const res = await fetch(
    //   'https://endpoint.yourcode.app/semyers189/api/terms'
    // );
    // const data = await res.json();
    // output = await data.filter(term => term.collectionId === Number(id));
    const res = await axios.get(`${api}/api/terms?collectionId=${id}`);
    dispatch({
      type: GET_TERMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TERMS_ERROR,
      payload: err.response.statusText
    });
  }
};

// adds a term
export const addTerm = term => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axios.post(`${api}/api/terms`, term);
    dispatch({
      type: ADD_TERM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TERMS_ERROR,
      payload: err.response.statusText
    });
  }
};

// deletes a term

export const deleteTerm = id => async dispatch => {
  try {
    dispatch(setLoading());
    // await fetch(`https://endpoint.yourcode.app/semyers189/api/terms/${id}`, {
    //   method: 'DELETE'
    // });
    await axios.delete(`${api}/api/terms/${id}`);
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
  const { name, origin } = term;
  try {
    dispatch(setLoading());
    // const res = await fetch(
    //   `https://endpoint.yourcode.app/semyers189/api/terms/${term.id}`,
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(term),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // );
    // data = await res.json();
    const res = await axios.put(`${api}/api/terms/${term.id}`, {
      name,
      origin
    });
    dispatch({
      type: UPDATE_TERM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TERMS_ERROR,
      payload: err.response
    });
  }
};
