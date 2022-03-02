import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865F2",
});

const AuthBox = ({ loading, children }) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 700,
          height: 450,
          background: "#36393F",
          borderRadius: "5px",
          boxShadow: "0 3px 10px 0 rbg(0 0 0 /20%)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {loading && (
          <div>
            <LinearProgress color="inherit" />
          </div>
        )}
        <div style={{ padding: "25px" }}>{children}</div>
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
