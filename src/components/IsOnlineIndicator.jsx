import React from "react";
import Box from "@mui/material/Box";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const IsOnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: "#3BA55D",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "5px",
      }}
    >
      <FiberManualRecordIcon />
    </Box>
  );
};

export default IsOnlineIndicator;
