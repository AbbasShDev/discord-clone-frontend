import React from "react";
import { styled } from "@mui/system";
import PendingFriendsListItem from "./PendingFriendsListItem";

const DUMMY_DATA = [
  {
    _id: 1,
    sender: {
      username: "Mark",
      email: "mark@email.co",
    },
  },
  {
    _id: 2,
    sender: {
      username: "John",
      email: "john@email.co",
    },
  },
];

const PendingInvitaionsListContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitaionsList = () => {
  return (
    <PendingInvitaionsListContainer>
      {DUMMY_DATA.map((invitaion) => (
        <PendingFriendsListItem
          key={invitaion._id}
          id={invitaion._id}
          username={invitaion.sender.username}
          email={invitaion.sender.email}
        />
      ))}
    </PendingInvitaionsListContainer>
  );
};

export default PendingInvitaionsList;
