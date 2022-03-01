import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const RedirectSpan = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const RedirectInfo = ({ text, style, redirectHandler, redirectText }) => {
  return (
    <Typography
      variant="contained"
      sx={{ color: "#72767d" }}
      style={style ? style : {}}
    >
      {text}{" "}
      <RedirectSpan onClick={redirectHandler}>{redirectText}</RedirectSpan>
    </Typography>
  );
};

export default RedirectInfo;
