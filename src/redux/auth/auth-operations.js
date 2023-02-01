import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  useIcon: false,
  fontSize: '20px',
  position: 'right-top',
  width: '350px',
  height: '35px',
  clickToClose: true,
});

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeaders = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
const unsetAuthHeaders = () =>
  (axios.defaults.headers.common.Authorization = '');

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/signup`, userData);
      setAuthHeaders(data.token);
      return data;
    } catch (error) {
      Notify.warning(
        'Oppps... Registration error! This user is already registered!'
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/login`, userData);
      setAuthHeaders(data.token);
      return data;
    } catch (error) {
      Notify.warning('Oppps... Login or password problem! Try again!');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`/users/logout`);
    unsetAuthHeaders();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const tokenLS = thunkAPI.getState().auth.token;
  if (!tokenLS) {
    return thunkAPI.rejectWithValue('No token');
  }
  setAuthHeaders(tokenLS);
  try {
    const { data } = await axios(`/users/current`);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
