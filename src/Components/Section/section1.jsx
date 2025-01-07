import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BMWRow() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '300px', // Adjust as needed
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff', // Black background
        color: '#000', // White text
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
        //   fontWeight: 'bold',
          marginBottom: 2,
        }}
      >
        All BMW Models
      </Typography>
      <Button
        variant="outlined"
        sx={{
          textTransform: 'none',
          fontSize: '1rem',
          padding: '10px 20px',
        //   borderColor: '#fff',
          color: '#000',
          '&:hover': {
            borderColor: '#fff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
       Find Your BMW
      </Button>
    </Box>
  );
}
