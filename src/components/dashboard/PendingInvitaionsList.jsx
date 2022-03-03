import React from "react";
import { styled } from "@mui/system";

const PendingInvitaionsListContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitaionsList = () => {
  return <PendingInvitaionsListContainer></PendingInvitaionsListContainer>;
};

export default PendingInvitaionsList;
