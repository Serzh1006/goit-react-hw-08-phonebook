import { createSlice } from '@reduxjs/toolkit';
import { userSignUp } from 'servises/userSignUpApi';
import { userLogin } from 'servises/userLoginApi';

const stateUsers = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  error: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState: stateUsers,
  extraReducers: builder => {
    builder
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const userReducer = userSlice.reducer;
