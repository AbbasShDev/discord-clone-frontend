import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomButton = styled(Button)({
  width: "48px",
  height: "48px",
  borderRadius: "16px",
  margin: "0",
  padding: "0",
  minWidth: "0",
  marginTop: "10px",
  color: "#FFFFFF",
  backgroundColor: "#5865F2",
  opacity: "1",
  transition: "opacity .3s ease-in-out",
  "&:hover": {
    backgroundColor: "#5865F2",
    opacity: "0.8",
  },
});

const SideBarButton = ({ icon }) => {
  return <CustomButton>{icon}</CustomButton>;
};

export default SideBarButton;
