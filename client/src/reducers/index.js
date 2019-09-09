import { combineReducers } from 'redux';
import authReducer from './authReducer';
import termsReducer from './termsReducer';
import collectionsReducer from './collectionsReducer';
import sharedReducer from './sharedReducer';

export default combineReducers({
  auth: authReducer,
  terms: termsReducer,
  collections: collectionsReducer,
  shared: sharedReducer
});
