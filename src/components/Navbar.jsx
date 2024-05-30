import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Shell.png'

// Define the 'Navbar' component of the application.
const Navbar = () => {
  return (
    // Use the 'Stack' component to create a horizontal layout for the Navbar.
    // Set styles for spacing, margin, and padding.
    <Stack direction="row" justifyContent="space-around" sx={{gap: { sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
      {/* Create a link to the home page. */}
      <Link to="/">
        {/* Display the logo image with specific styles for width, height, and margin. */}
        <img src={Logo} alt='logo' style={{width: '80px', height: '80px', margin: '0 15px'}}/>
      </Link>
      {/* Use the 'Stack' component to create a horizontal layout for navigation links. */}
      {/* Set styles for spacing, font size, alignment, and margin. */}
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end" marginBottom="25px">
        {/* Create a link to the home page with specific styles for text decoration and color. */}
        <Link to="/" style={{textDecoration: 'none', color: 'white', borderBottom: '3px solid white'}}>Home</Link>
        {/* Create an anchor link to the exercises section with specific styles for text decoration and color. */}
        <a href="#exercises" style={{textDecoration: 'none', color: 'white'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar