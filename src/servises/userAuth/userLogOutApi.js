import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};
const clearToken = () => {
  instance.defaults.headers.common['Authorization'] = '';
};

export const userLogOut = createAsyncThunk(
  'users/userlogout',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.user.token;
      setToken(token);
      const { data } = await instance.post('/users/logout');
      clearToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
