import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLoading: false,
    isFetchCurrentUser: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(logout.fulfilled, state => {
        state.token = null;
        state.user = { name: '', email: '' };
        state.error = null;
        state.isLoading = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchCurrentUser = false;
        state.isLoading = false;
      })

      .addCase(refresh.pending, state => {
        state.isFetchCurrentUser = true;
      })
      .addCase(refresh.rejected, state => {
        state.isFetchCurrentUser = false;
      })

      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          refresh.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        (state, { payload: { user, token } }) => {
          state.user = user;
          state.token = token;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          refresh.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
