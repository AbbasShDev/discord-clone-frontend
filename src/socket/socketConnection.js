import io from "socket.io-client";
import { setPendingInvitations } from "../features/pendingInvitations/pendingInvitationsSlice";
import {
  updateFriends,
  updateOnlineFriends,
  updateOfflineFriends,
} from "../features/friends/friendsSlice";
import { store } from "../app/store";

let socket = null;

export const connectWithSocketServer = (user) => {
  const { token } = user;

  socket = io(import.meta.env.VITE_BACKEND_URL, {
    auth: {
      token,
    },
  });

  socket.on("connect", () => {
    console.log("Server connected");
    console.log(socket.id);
  });

  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;

    store.dispatch(setPendingInvitations(pendingInvitations));
  });

  socket.on("update-friends-list", (data) => {
    const { friendsList } = data;
    store.dispatch(updateFriends(friendsList));
  });

  socket.on("update-online-friends", (data) => {
    const { userId } = data;

    store.dispatch(updateOnlineFriends(userId));
  });

  socket.on("update-offline-friends", (data) => {
    const { userId } = data;

    store.dispatch(updateOfflineFriends(userId));
  });
};
