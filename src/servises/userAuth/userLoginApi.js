import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from 'servises/functionToken';

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
