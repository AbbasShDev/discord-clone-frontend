import io from "socket.io-client";
import { setPendingInvitations } from "../features/pendingInvitations/pendingInvitationsSlice";
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
    console.log("friends-invitations", pendingInvitations);

    store.dispatch(setPendingInvitations(pendingInvitations));
  });
};
