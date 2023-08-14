import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userLogin = createAsyncThunk(
  'contacts/loginUser',
  async (dataLogin, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        dataLogin
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
