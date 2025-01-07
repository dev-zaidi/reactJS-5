import React from "react";
import { Box, Typography,Button } from "@mui/material";

const FullWidthBox = () => {
  return (
    <Box
      sx={{
        width: "100%", // Full width of the row
        height: "400px", // Height of the box
        backgroundColor: "#000", // Black background
        // display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Vertically center content
        alignItems: "center", // Horizontally center content
        color: "#fff", // White text
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h5" align="left" sx={{ marginBottom: 1 }}>
        BMW iDrive
      </Typography>
      <Typography variant="h3" align="left">
        An Evolution of Control and Intelligent Connectivity
      </Typography>
      <br /><br />
      {/* <Button variant='outlined'>Read More</Button> */}
    </Box>
  );
};

export default FullWidthBox;
