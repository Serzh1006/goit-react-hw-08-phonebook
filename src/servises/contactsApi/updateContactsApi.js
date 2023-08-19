import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'servises/functionToken';

export const updateContactUser = createAsyncThunk(
  'contacts/updateContacts',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.patch(
        `/contacts/${userData.id}`,
        userData.contact
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
