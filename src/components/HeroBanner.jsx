import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/bannerWOBack.png'

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'},
              ml: {sm: '50px'}
              }} position="relative" p="20px">
      <Typography color='#e4e2dd' fontWeight="600" fontSize="26px">
        Shell Fitness
      </Typography>
      <Typography  fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}}
      mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight="35px" mb={4}>
            Check out the most effective exercises
      </Typography>
      
      <Button variant='contained'  style={ 
              { backgroundColor: "#ff89a9", color:"black", padding: '10px'}}>Explore Exercises</Button>
      <Typography fontWeight={600} color="#f4a7bb" sx={{opacity: 0.4, display: {lg: 'block', xs: 'none'}}}
      fontSize="200px">
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img' 
            />
    </Box>
  )
}

export default HeroBanner