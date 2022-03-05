import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";

const DUMMY_DATA = [
  { _id: 1, username: "Smith", isOnline: true },
  { _id: 2, username: "Sara", isOnline: false },
  { _id: 3, username: "John", isOnline: false },
];
const FriendsListContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  return (
    <FriendsListContainer>
      {DUMMY_DATA.map((f) => (
        <FriendsListItem
          key={f._id}
          id={f._id}
          username={f.username}
          isOnline={f.isOnline}
        />
      ))}
    </FriendsListContainer>
  );
};

export default FriendsList;
