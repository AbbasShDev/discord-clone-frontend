import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import friendsService from "./friendsService";
import { toast } from "react-toastify";

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
    updateFriends: (state, action) => {
      state.friends = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = "";
    },
    updateOnlineFriends: (state, action) => {
      console.log(action.payload);
      state.friends = state.friends.map((friend) => {
        if (friend.id === action.payload) {
          friend.isOnline = true;
        }

        return friend;
      });
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = "";
    },
    updateOfflineFriends: (state, action) => {
      console.log(action.payload);
      state.friends = state.friends.map((friend) => {
        if (friend.id === action.payload) {
          friend.isOnline = false;
        }

        return friend;
      });
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendInviation.fulfilled, (state) => {
        state.isSuccess = true;
        toast.success(`Invitaion has been sent`);
      })
      .addCase(sendInviation.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {
  reset,
  updateFriends,
  updateOnlineFriends,
  updateOfflineFriends,
} = friendsSlice.actions;
export default friendsSlice.reducer;
