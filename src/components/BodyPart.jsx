import React, { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // Use useState to store the icon source
  const [iconSrc, setIconSrc] = useState(null);

  // Use useEffect to dynamically load the icon when the value of item changes
  useEffect(() => {
    const fetchIcon = async () => {
      try {
        // Dynamically import the icon based on the value of item
        const { default: icon } = await import(`../assets/icons/${item}.png`);
        setIconSrc(icon);
      } catch (error) {
        console.error('Error loading icon:', error);
      }
    };

    fetchIcon(); // Call the fetchIcon function when the value of item changes
  }, [item]); // item is a dependency, so useEffect will run whenever item changes

  return (
    <Stack
      type='button'
      alignItems="center"
      justifyContent="center"
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid r#ff2625' : '',
        backgroundColor: '#2b2b2b',
        border: '3px solid #fff',
        borderRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
    >
      {iconSrc && ( // Check if iconSrc has been loaded before rendering the icon
        <>
          <img src={iconSrc} alt='icon' style={{ width: '70px', height: '70px' }} />
          <Typography fontSize="22px" fontWeight="bold" color="#fff" textTransform="capitalize">
            {item}
          </Typography>
        </>
      )}
    </Stack>
  );
};

export default BodyPart;
