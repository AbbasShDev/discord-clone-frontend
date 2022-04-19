import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import pendingInvitationsService from "./pendingInvitationsService";

const initialState = {
  pendingInvitations: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const pendingInvitationsSlice = createSlice({
  name: "pendingInvitations",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    setPendingInvitations: (state, action) => {
      state.pendingInvitations = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = "";
    },
  },
});

export const { reset, setPendingInvitations } = pendingInvitationsSlice.actions;
export default pendingInvitationsSlice.reducer;
