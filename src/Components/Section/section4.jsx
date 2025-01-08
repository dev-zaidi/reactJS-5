import React from "react";
import { Box, Typography } from "@mui/material";

const FullWidthBox = () => {
  return (
    <Box
      sx={{
        width: "100%", // Full width of the row
        height: { xs: "300px", md: "400px" }, // Adjust height for smaller screens
        backgroundColor: "#000", // Black background
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Vertically center content
        alignItems: "center", // Horizontally center content
        color: "#fff", // White text
        padding: 2,
        boxSizing: "border-box",
        textAlign: { xs: "center", md: "left" }, // Center align text on small screens
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1rem", md: "1.5rem" }, // Smaller font size on small screens
          marginBottom: 1,
        }}
      >
        BMW iDrive
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.5rem", md: "2.5rem" }, // Adjust font size for smaller screens
        }}
      >
        An Evolution of Control and Intelligent Connectivity
      </Typography>
    </Box>
  );
};

export default FullWidthBox;
