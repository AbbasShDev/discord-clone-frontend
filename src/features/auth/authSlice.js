import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state = {};
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
