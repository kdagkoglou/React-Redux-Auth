import sa_database from '../apis/sa_database';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await sa_database.post('/users/', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.message });
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(`error.request: ${error.request}`);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error: ', error.message);
    }
  }
};

export const login = (formProps, callback) => async dispatch => {
  try {
    const response = await sa_database.post('/api-token-auth/', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.message });
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(`error.request: ${error.request}`);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }
    console.log(error);
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};
