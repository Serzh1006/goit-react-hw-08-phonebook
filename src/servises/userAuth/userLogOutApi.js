import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, clearToken } from 'servises/functionToken';

export const userLogOut = createAsyncThunk(
  'users/userlogout',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/logout');
      clearToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
