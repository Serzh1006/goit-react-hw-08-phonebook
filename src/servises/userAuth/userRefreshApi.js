import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from 'servises/functionToken';

export const userRefresh = createAsyncThunk(
  'users/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    if (token === null) return thunkAPI.rejectWithValue('Token not found');
    try {
      setToken(token);
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
