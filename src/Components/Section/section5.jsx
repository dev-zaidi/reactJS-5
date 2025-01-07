import React from "react";
import { Box, Typography, Button} from "@mui/material";

const TwoIdenticalBlocks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between", // Align blocks side by side
        width: "100%", // Full width of the row
        boxSizing: "border-box",
        marginTop: 2, // Optional margin for spacing between sections
      }}
    >
      {/* First block */}
      <Box
        sx={{
          width: "50%", // Half the width of the row
          height: "400px", // Height of the block
          backgroundColor: "#000", // Black background
        //   display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Vertically center content
          alignItems: "center", // Horizontally center content
          color: "#fff", // White text
          padding: 2,
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h5" align="left" sx={{ marginTop: 5 }}>
          Festive Season
        </Typography>
        <Typography variant="h3" align="left">
          Two generations, one shared driving pleasure
        </Typography>
        {/* <Button variant='outlined'>Read More</Button> */}
      </Box>

      {/* Second block */}
      <Box
        sx={{
          width: "50%", // Half the width of the row
          height: "400px", // Height of the block
          backgroundColor: "#000", // Black background
        //   display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Vertically center content
          alignItems: "center", // Horizontally center content
          color: "#fff", // White text
          padding: 2,
          boxSizing: "border-box",
        }}
      >
       <Typography variant="h5" align="left" sx={{ marginTop: 5 }}>
          Smart Asistance
        </Typography>
        <Typography variant="h3" align="left">
          The BMW driving companionship
        </Typography>
        {/* <Button variant='outlined'>Read More</Button> */}
      </Box>
    </Box>
  );
};

export default TwoIdenticalBlocks;
