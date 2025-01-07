import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function TextWithCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/600x300?text=Image+1',
    'https://via.placeholder.com/600x300?text=Image+2',
    'https://via.placeholder.com/600x300?text=Image+3',
  ];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <Box sx={{ backgroundColor: '#fff', padding: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', marginBottom: 2 }}
          >
            Learn everything about BMW here
          </Typography>
          <Button
            variant="text"
            sx={{
              color: '#000',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: '1rem',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            &gt; BMW News
          </Button>
        </Grid>

        {/* Right Carousel Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Left Arrow */}
            <Button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              sx={{
                position: 'absolute',
                left: 0,
                color: '#000',
                zIndex: 2,
                '&:disabled': { color: 'rgba(0, 0, 0, 0.3)' },
              }}
            >
              <ArrowBackIosIcon />
            </Button>

            {/* Image Display */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Box>

            {/* Right Arrow */}
            <Button
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              sx={{
                position: 'absolute',
                right: 0,
                color: '#000',
                zIndex: 2,
                '&:disabled': { color: 'rgba(0, 0, 0, 0.3)' },
              }}
            >
              <ArrowForwardIosIcon />
            </Button>
          </Box>

          {/* Pagination Indicator */}
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              marginTop: 2,
              fontWeight: 'bold',
              color: '#000',
            }}
          >
            {currentIndex + 1} / {images.length}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
