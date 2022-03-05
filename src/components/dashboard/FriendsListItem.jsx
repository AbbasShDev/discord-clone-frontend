import React from "react";
import { Button, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import IsOnlineIndicator from "../IsOnlineIndicator";

const CustomButton = styled(Button)({
  width: "100%",
  height: "42px",
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  textTransform: "none",
  color: "black",
  position: "relative",
});

const FriendsListItem = ({ id, username, isOnline }) => {
  return (
    <CustomButton>
      <Avatar sx={{ bgcolor: "#5865F2" }}>{username.substring(0, 2)}</Avatar>
      <Typography
        style={{ marginLeft: "7px", fontWeight: "700", color: "#8e9297" }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <IsOnlineIndicator />}
    </CustomButton>
  );
};

export default FriendsListItem;
