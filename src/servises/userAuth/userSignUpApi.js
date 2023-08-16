import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// const clearToken = () => {
//   instance.defaults.headers.common['Authorization'] = '';
// };

export const userSignUp = createAsyncThunk(
  'users/signUpUser',
  async (newUser, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/signup', newUser);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
