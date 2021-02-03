import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Auth } from '@app/api';

const initState = {
  idToken: null,
};

export const loginReq = createAsyncThunk('auth/login_request', async data => {
  const response = await Auth.test(data);
  if (response?.data) {
    return {
      idToken: 'jsonwebtoken',
    };
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    logout(state) {
      console.log('called');
      state.idToken = null;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [loginReq.fulfilled]: (state, action) => {
      // Add user to the state array
      state.idToken = action.payload.idToken;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice;
