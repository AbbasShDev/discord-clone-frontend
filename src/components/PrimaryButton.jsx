import React from "react";
import Button from "@mui/material/Button";

const PrimaryButton = ({ label, style, onClick, disabled }) => {
  return (
    <Button
      variant="contained"
      sx={{
        background: "#5865F2",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }}
      style={style ? style : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
