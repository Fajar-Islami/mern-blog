import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import axios from 'axios';

// Initial State
const initialState = {
  users: [],
  error: null,
  loading: true,
};

// Context
export const UserContext = createContext(initialState);

// Provider
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  async function userRegis() {
    const res = await axios.post('/api/v1/blogs/regis');
    try {
      dispatch({
        type: 'USER_REGIS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
        payload: err.response.data.error,
      });
    }
  }
  async function userLogin() {
    const res = await axios.get('/api/v1/blogs/regis');
    try {
      dispatch({
        type: 'USER_',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
        payload: err.response.data.error,
      });
    }
  }
  async function userLogin() {
    const res = await axios.post('/api/v1/blogs/login');
    try {
      dispatch({
        type: 'USER_LOGIN',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
        payload: err.response.data.error,
      });
    }
  }
};
