import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const reducers = {
  form, // the state and validation of form fields
};

export default combineReducers(reducers);