import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("dive")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865F2",
});

const AuthBox = ({ children }) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          background: "#36393F",
          borderRadius: "5px",
          boxShadow: "0 3px 10px 0 rbg(0 0 0 /20%)",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
        }}
      >
        {children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
