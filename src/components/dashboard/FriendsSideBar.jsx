import React, { useState } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import PrimaryButton from "../PrimaryButton";
import FriendsList from "./FriendsList";
import PendingInvitaionsList from "./PendingInvitaionsList";
import AddFriendDialog from "./AddFriendDialog";

const FriendsSideBarContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const AddFriendButtomStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3BA55D",
};

const FriendsSideBarTitleStyles = {
  textTransform: "uppercase",
  color: "#FFFFFF",
  fontSize: "14px",
  marginTop: "10px",
};

const FriendsSideBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <FriendsSideBarContainer>
      <PrimaryButton
        style={AddFriendButtomStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
      <Typography sx={FriendsSideBarTitleStyles}>Private Messages</Typography>
      <FriendsList />
      <Typography sx={FriendsSideBarTitleStyles}>Invitations</Typography>
      <PendingInvitaionsList />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHnadler={handleCloseAddFriendDialog}
      />
    </FriendsSideBarContainer>
  );
};

export default FriendsSideBar;
