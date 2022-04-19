import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pendingInvitationsService from "./pendingInvitationsService";
import { toast } from "react-toastify";

const initialState = {
  pendingInvitations: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const acceptInviation = createAsyncThunk(
  "friends/acceptInviation",
  async (data, thunkApi) => {
    try {
      return await pendingInvitationsService.acceptInvitation(data);
    } catch (error) {
      const message =
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message || error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const rejectInviation = createAsyncThunk(
  "friends/rejectInviation",
  async (data, thunkApi) => {
    try {
      return await pendingInvitationsService.rejectInvitation(data);
    } catch (error) {
      const message =
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message || error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(acceptInviation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(acceptInviation.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
        toast.success(`Invitaion has been accepted`);
      })
      .addCase(acceptInviation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(rejectInviation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(rejectInviation.fulfilled, (state) => {
        state.isSuccess = true;
        state.isLoading = false;
        toast.success(`Invitaion has been rejected`);
      })
      .addCase(rejectInviation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setPendingInvitations } = pendingInvitationsSlice.actions;
export default pendingInvitationsSlice.reducer;
