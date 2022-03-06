import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import AppBar from "../components/dashboard/AppBar";
import SideBar from "../components/dashboard/SideBar";
import FriendsSideBar from "../components/dashboard/FriendsSideBar";
import Chat from "../components/dashboard/Chat";
import { connectWithSocketServer } from "../socket/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      connectWithSocketServer(user);
    }
  }, []);

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
