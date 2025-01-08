
import React from "react";
import { Box, Typography } from "@mui/material";

const TwoIdenticalBlocks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, side by side on large screens
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
        marginTop: 2,
      }}
    >
      {/* First block */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" }, // Full width on small screens, half on large
          height: "400px",
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start", // Align text to the left
          color: "#fff",
          padding: 2,
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h5"
          align="left"
          sx={{ marginTop: 5, fontSize: { xs: "1.2rem", md: "1.5rem" } }} // Responsive font size
        >
          Festive Season
        </Typography>
        <Typography
          variant="h3"
          align="left"
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} // Responsive font size
        >
          Two generations, one shared driving pleasure
        </Typography>
      </Box>

      {/* Second block */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" }, // Full width on small screens, half on large
          height: "400px",
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start", // Align text to the left
          color: "#fff",
          padding: 2,
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h5"
          align="left"
          sx={{ marginTop: 5, fontSize: { xs: "1.2rem", md: "1.5rem" } }} // Responsive font size
        >
          Smart Assistance
        </Typography>
        <Typography
          variant="h3"
          align="left"
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} // Responsive font size
        >
          The BMW driving companionship
        </Typography>
      </Box>
    </Box>
  );
};

export default TwoIdenticalBlocks;
