import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from 'servises/functionToken';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    try {
      setToken(token);
      const { data } = await instance.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
