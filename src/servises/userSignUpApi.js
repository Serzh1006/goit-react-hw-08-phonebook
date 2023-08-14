import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSignUp = createAsyncThunk(
  'contacts/signUpUser',
  async (newUser, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        newUser
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
