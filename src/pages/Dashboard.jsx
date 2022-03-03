import React from "react";
import { styled } from "@mui/system";
import AppBar from "../components/dashboard/AppBar";
import SideBar from "../components/dashboard/SideBar";
import FriendsSideBar from "../components/dashboard/FriendsSideBar";
import Chat from "../components/dashboard/Chat";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Chat />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
