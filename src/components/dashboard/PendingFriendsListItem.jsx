import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box, Avatar, Typography, Tooltip, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import IsOnlineIndicator from "../IsOnlineIndicator";

const PendingFriendsListItem = ({
  id,
  username,
  email,
  acceptFriendInvitaion = () => {},
  rejectFriendInvitaion = () => {},
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptFriendInvitaion = () => {
    acceptFriendInvitaion({ id });
    setButtonDisabled(true);
  };

  const handleRejectFriendInvitaion = () => {
    rejectFriendInvitaion({ id });
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={email}>
      <Box
        sx={{
          width: "100%",
          height: "42px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar sx={{ bgcolor: "#5865F2" }}>{username.substring(0, 2)}</Avatar>
        <Typography
          style={{
            marginLeft: "7px",
            fontWeight: "700",
            color: "#8e9297",
            flexGrow: 1,
          }}
          variant="subtitle1"
        >
          {username}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <IconButton
            sx={{ color: "#FFFFFF" }}
            onClick={handleAcceptFriendInvitaion}
            disabled={buttonDisabled}
          >
            <CheckIcon />
          </IconButton>
          <IconButton
            sx={{ color: "#FFFFFF" }}
            onClick={handleRejectFriendInvitaion}
            disabled={buttonDisabled}
          >
            <ClearIcon />
          </IconButton>
        </Box>
      </Box>
    </Tooltip>
  );
};

export default PendingFriendsListItem;
