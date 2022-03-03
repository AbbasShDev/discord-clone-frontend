import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomButton = styled(Button)({
  background: "#5865F2",
  color: "white",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 500,
  width: "100%",
  height: "40px",
  opacity: "1",
  transition: "opacity .3s ease-in-out",
  "&:hover": {
    opacity: "0.8",
  },
});
const PrimaryButton = ({ label, style, onClick, disabled }) => {
  return (
    <CustomButton
      variant="contained"
      style={style ? style : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
};

export default PrimaryButton;
