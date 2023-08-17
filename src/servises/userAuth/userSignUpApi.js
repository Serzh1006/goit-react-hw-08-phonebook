import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from 'servises/functionToken';

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
