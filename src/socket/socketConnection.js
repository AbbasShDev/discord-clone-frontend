import io from "socket.io-client";

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
};
