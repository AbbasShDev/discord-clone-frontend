import React from "react";
import { styled } from "@mui/system";
import SideBarButton from "../SideBarButton";
import GroupsIcon from "@mui/icons-material/Groups";

const SideBarContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarButton icon={<GroupsIcon />} />
    </SideBarContainer>
  );
};

export default SideBar;
