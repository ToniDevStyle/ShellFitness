import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useState, useEffect } from 'react';

import HeroBannerImage from "../assets/images/bannerWOBack2.png";
import HeroSmallBannerImage from "../assets/images/Shell.png";

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

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

const isBigScreen = (screenSize) => {
  return screenSize.width >= 805;
};

const HeroBanner = () => {
  const screenSize = useScreenSize();

  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
      className='box-hero'
    >
      <Typography color="#e4e2dd" fontWeight="600" fontSize="26px">
        Shell Fitness
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>

      <Button
        variant="contained"
        style={{ backgroundColor: "#ff89a9", color: "black", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#f4a7bb"
        sx={{ opacity: 0.4, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      {
        isBigScreen(screenSize)
        ?
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
        :
        <img src={HeroSmallBannerImage} alt="banner" className="hero-banner-img" />
      }
    </Box>
  );
};

export default HeroBanner;
