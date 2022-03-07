import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import friendsService from "./friendsService";

const initialState = {
  friends: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const sendInviation = createAsyncThunk(
  "friends/sendInvitaion",
  async (data, thunkApi) => {
    try {
      return await friendsService.sendInvitation(data);
    } catch (error) {
      const message =
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message || error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendInviation.fulfilled, (state) => {
        state.isSuccess = true;
      })
      .addCase(sendInviation.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = friendsSlice.actions;
export default friendsSlice.reducer;
