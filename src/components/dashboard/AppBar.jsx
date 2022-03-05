import React from "react";
import { styled } from "@mui/system";
import AppBarDropdown from "../AppBarDropdown";

const AppBarContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  borderBottom: "1px solid #202225",
  backgroundColor: "#36393F",
  width: "calc(100% - 326px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
});

const AppBar = () => {
  return (
    <AppBarContainer>
      <AppBarDropdown />
    </AppBarContainer>
  );
};

export default AppBar;
