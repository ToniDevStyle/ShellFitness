import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/Shell.png";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

const HeroBanner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const screenSize = useScreenSize();

  const isBigScreen = (screenSize) => {
    return screenSize.width >= 805;
  };

  const animateText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter" style={{ '--char-index': index }}>
        {char}
      </span>
    ));
  };

  return (
    <Box
      sx={{ mt: { lg: "50px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
      className={`box-hero ${isHovered ? 'hovered' : ''}`}
    >
      <Typography color="#e4e2dd" fontWeight="600" fontSize="90px" ml="30px">
        {animateText('Shell')}
        <br />
        {animateText('Fitness')}
      </Typography>
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
      <Typography fontSize="22px" lineHeight="35px" mb={4} ml="30px"
      sx={{ opacity: 0.4, display: { lg: "block", xs: "none" } }}>
        Check out the most effective ...
      </Typography>

      <Typography
        fontWeight={600}
        color="#f4a7bb"
        sx={{ opacity: 0.4, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
        ml={22}
      >
        Exercises
      </Typography>
      
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
