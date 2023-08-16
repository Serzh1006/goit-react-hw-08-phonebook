import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const userLogin = createAsyncThunk(
  'users/loginUser',
  async (dataLogin, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/login', dataLogin);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
