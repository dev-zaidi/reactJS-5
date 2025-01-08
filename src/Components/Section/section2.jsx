import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SectionWithTextAndCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Small screen breakpoint

  const items = [
    {
      img: 'https://via.placeholder.com/400x300',
      title: 'BMW and superheroes',
      description: 'Freeing Gaia Podcast',
    },
    {
      img: 'https://via.placeholder.com/400x300',
      title: 'Electric Myths',
      description: 'A video podcast about electric driving myths',
    },
    {
      img: 'https://via.placeholder.com/400x300',
      title: 'The future according to...',
      description: 'Audio column',
    },
    {
      img: 'https://via.placeholder.com/400x300',
      title: 'DEE Myths',
      description: 'An audio podcast about human innovation',
    },
    {
      img: 'https://via.placeholder.com/400x300',
      title: 'BMW Vision',
      description: 'Exploring new frontiers in mobility',
    },
    {
      img: 'https://via.placeholder.com/400x300',
      title: 'Innovative Drives',
      description: 'Pioneering technology in cars',
    },
  ];

  // Adjust the number of visible cards based on screen size
  const cardsPerView = isSmallScreen ? 1 : 4;
  const visibleItems = items.slice(currentIndex, currentIndex + cardsPerView);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < items.length - cardsPerView) setCurrentIndex(currentIndex + 1);
  };

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: 4 }}>
      <Grid container spacing={4}>
        {/* Left Text Section (4 columns) */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            THE BMW PODCAST: CHANGING LANES
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Changing Lanes is the official podcast from BMW. In these audio
            series, we take you with us on new journeys through the BMW
            universe. Find out more about sustainability, innovation,
            technology, mobility, and the latest trends. You can find and
            subscribe to Changing Lanes on all major podcast platforms, so tune
            in!
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              paddingX: 4,
              paddingY: 1.5,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#fff', color: '#000' },
            }}
          >
            Listen Now
          </Button>
        </Grid>

        {/* Right Carousel Section (8 columns) */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Left Arrow */}
            <Button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              sx={{
                color: '#fff',
                minWidth: '40px',
                '&:disabled': { color: 'rgba(255, 255, 255, 0.3)' },
              }}
            >
              <ArrowBackIosIcon />
            </Button>

            {/* Card Display Section */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cardsPerView}, 1fr)`,
                gap: 2,
                flexGrow: 1,
              }}
            >
              {visibleItems.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    backgroundColor: '#fff',
                    color: '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '300px',
                    
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.title}
                    sx={{ height: '60%', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

            {/* Right Arrow */}
            <Button
              onClick={handleNext}
              disabled={currentIndex >= items.length - cardsPerView}
              sx={{
                color: '#fff',
                minWidth: '40px',
                '&:disabled': { color: 'rgba(255, 255, 255, 0.3)' },
              }}
            >
              <ArrowForwardIosIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
