import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";

const FriendsListContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  const { friends } = useSelector((state) => state.friends);

  return (
    <FriendsListContainer>
      {friends.map((f) => (
        <FriendsListItem
          key={f.id}
          id={f.id}
          username={f.username}
          isOnline={f.isOnline}
        />
      ))}
    </FriendsListContainer>
  );
};

export default FriendsList;
