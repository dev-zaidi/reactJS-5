import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Adjust breakpoint as needed

  return (
    <ImageList
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        transform: "translateZ(0)",
      }}
      cols={isSmallScreen ? 1 : 3} // Switch to 1 column on small screens
      gap={8}
    >
      {itemData.map((item) => {
        const cols = isSmallScreen ? 1 : item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                height: "100%",
              }}
              position="bottom"
              title={
                <div>
                  <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>
                    {item.description}
                  </div>
                </div>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
     {img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      description: 'Start your day with a hearty breakfast.',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      description: 'Savor the deliciousness of our gourmet burgers.',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      description: 'Capture memories with high-quality cameras.',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      description: 'Relax with a warm cup of freshly brewed coffee.',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      description: 'Accessorize with our stylish and trendy hats.',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      description: 'Experience the sweetness of natural honey.',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      description: 'Stay active with our premium basketball gear.',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      description: 'Bring a touch of greenery to your space with ferns.',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      description: 'Enjoy the earthy flavors of fresh mushrooms.',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato Basil',
      description: 'Indulge in the classic combination of tomato and basil.',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea Star',
      description: 'Discover the beauty of underwater life with sea stars.',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      description: 'Explore the world with our durable and stylish bikes.',
    },
  // Add more items as needed
];
