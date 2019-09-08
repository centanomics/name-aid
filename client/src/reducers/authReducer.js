import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  error: null,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
    case USER_LOADED:
    case AUTH_ERROR:
    case LOGIN_SUCCESS:
    case LOGIN_FAIL:
    case LOGOUT:
    default:
      return state;
  }
};
