import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import friendsReducer from "../features/friends/friendsSlice";
import pendingInvitationsReducer from "../features/pendingInvitations/pendingInvitationsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    friends: friendsReducer,
    pendingInvitations: pendingInvitationsReducer,
  },
});
