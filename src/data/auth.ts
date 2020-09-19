import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { email: '', password: '' },
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { addUser } = authSlice.actions;
