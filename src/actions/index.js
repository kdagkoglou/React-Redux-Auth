import sa_database from '../apis/sa_database';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await sa_database.post('/users/', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }

};

export const signout = () => {
  localStorage.removeItem('token');
  
  return {
    type: AUTH_USER,
    payload: ''
  }

};

export const login = (formProps, callback) => async dispatch => {
  try {
    const response = await sa_database.post('/api-token-auth/', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid Login' });
  }

};