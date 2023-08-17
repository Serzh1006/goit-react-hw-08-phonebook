import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from 'servises/functionToken';

export const addNewContactsToDB = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    try {
      setToken(token);
      const { data } = await instance.post('/contacts', newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
