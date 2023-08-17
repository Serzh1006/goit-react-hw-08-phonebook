import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userSignUp } from 'servises/userAuth/userSignUpApi';
import { userLogin } from 'servises/userAuth/userLoginApi';
import { userLogOut } from 'servises/userAuth/userLogOutApi';
import { userRefresh } from 'servises/userAuth/userRefreshApi';

const stateUsers = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  error: null,
  loading: false,
  isRefresh: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState: stateUsers,
  extraReducers: builder => {
    builder
      .addCase(userSignUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogOut.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogOut.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userRefresh.pending, state => {
        state.isRefresh = true;
        state.loading = true;
        state.error = null;
      })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.isRefresh = false;
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(userRefresh.rejected, (state, action) => {
        state.isRefresh = false;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);
