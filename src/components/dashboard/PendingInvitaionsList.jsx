import React from "react";
import { styled } from "@mui/system";
import { CircularProgress } from "@mui/material";
import PendingFriendsListItem from "./PendingFriendsListItem";
import { useSelector } from "react-redux";

const PendingInvitaionsListContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitaionsLoadingContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "auto",
});

const PendingInvitaionsList = () => {
  const { pendingInvitations, isLoading } = useSelector(
    (state) => state.pendingInvitations
  );

  return isLoading ? (
    <PendingInvitaionsLoadingContainer>
      <CircularProgress />
    </PendingInvitaionsLoadingContainer>
  ) : (
    <PendingInvitaionsListContainer>
      {pendingInvitations.map((invitaion) => (
        <PendingFriendsListItem
          key={invitaion._id}
          id={invitaion._id}
          username={invitaion.senderId.username}
          email={invitaion.senderId.email}
        />
      ))}
    </PendingInvitaionsListContainer>
  );
};

export default PendingInvitaionsList;
