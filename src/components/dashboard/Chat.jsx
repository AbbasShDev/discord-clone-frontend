import React from "react";
import { styled } from "@mui/system";

const ChatContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393F",
  marginTop: "48px",
  display: "flex",
});

const Chat = () => {
  return <ChatContainer></ChatContainer>;
};

export default Chat;
