import { Box, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
export default function AppLogo({ show }) {
  const display =
    useMediaQuery(useTheme().breakpoints.down("sm")) && show === "none"
      ? "none"
      : "block";
  return (
    <Box position="relative" sx={{m:0, p:0}}>
      <Typography variant="h2" color="text.secondary" mr={0} fontWeight="500">
        O
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom:"0.5em",
          left: "2.3em",
          display: display,
        }}
      >
        meiza
      </Typography>
    </Box>
  );
}
