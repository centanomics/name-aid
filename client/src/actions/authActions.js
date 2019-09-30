import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from './types';

const api = process.env.API_URL || 'http://localhost:9000';

// load user

export const loadUser = () => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    // change this later
    const res = await axios.get(`${api}/api/auth`);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// register user

export const registerUser = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post(`${api}/api/auth/users`, formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    loadUser();
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg
    });
  }
};

// login user

export const login = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post(`${api}/api/auth/login`, formData, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    loadUser();
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg
    });
  }
};

// logout

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT
  });
};

// clear errors
export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
};

// forgot password
export const forgotPassword = email => async dispatch => {
  const res = await axios.post(`${api}/api/auth/forgot`, { email });
  console.log(res);
};

// reset password
export const resetPassword = (token, password, password2) => async dispatch => {
  const res = await axios.post(`${api}/api/auth/reset`, {
    token,
    password,
    password2
  });
  dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data
  });
};
