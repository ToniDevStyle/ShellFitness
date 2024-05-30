import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/Shell.png";

// Custom hook to get and update the screen size.
const useScreenSize = () => {
  // State to keep track of the screen size.
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // useEffect hook to handle the resize event.
  useEffect(() => {
    // Function to update the screen size state.
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add an event listener for the resize event.
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Return the current screen size.
  return screenSize;
};

// Define the 'HeroBanner' component.
const HeroBanner = () => {
  // State to keep track of whether the banner image is hovered.
  const [isHovered, setIsHovered] = useState(false);

  // Use the custom hook to get the current screen size.
  const screenSize = useScreenSize();

  // Function to check if the screen width is greater than or equal to 805 pixels.
  const isBigScreen = (screenSize) => {
    return screenSize.width >= 805;
  };

  // Function to animate text by wrapping each character in a span element with a unique key and style.
  const animateText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter" style={{ '--char-index': index }}>
        {char}
      </span>
    ));
  };

  // Return the JSX that defines the UI for the HeroBanner component.
  return (
    // Use the 'Box' component for layout, setting margins, padding, and other styles.
    <Box
      sx={{ mt: { lg: "50px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
      className={`box-hero ${isHovered ? 'hovered' : ''}`}
    >
      {/* Animated text for the hero banner title. */}
      <Typography color="#e4e2dd" fontWeight="600" fontSize="80px" ml="30px">
        {animateText('Shell')}
        <br />
        {animateText('Fitness')}
      </Typography>
      {/* Gradient text for the subtitle. */}
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "74px", xs: "70px" },
          zIndex: 1,
          position: "relative",
          backgroundImage: "linear-gradient(to right, #ff6363, #5851db)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        mb="23px"
        mt="70px"
        className="target"
        ml="30px"
      >
        Sweat, <span role="img" aria-label="smile">😁</span> and <br />Repeat
      </Typography>
      {/* Subtext displayed only on large screens. */}
      <Typography fontSize="22px" lineHeight="35px" mb={4} ml="30px"
      sx={{ opacity: 0.4, display: { lg: "block", xs: "none" } }}>
        Check out the most effective ...
      </Typography>

      {/* Large text displayed only on large screens. */}
      <Typography
        fontWeight={600}
        color="#f4a7bb"
        sx={{ opacity: 0.4, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
        ml={22}
      >
        Exercises
      </Typography>
      
      {/* Hero banner image with hover effects. */}
      <img
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </Box>
  );
};

export default HeroBanner;
