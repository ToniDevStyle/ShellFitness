import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Shell.png'

const Footer = () => {
  return (
    <Box mt="100px" bgcolor='#2b2b2b'>
      <Stack gap='40px' alignItems="center" px="40px" pt="24px">
        <Typography variant='h6'mb="10px" pb="50px" >
          Made with 🤍 <hr /> <span>
        <img src={Logo} alt='logo' width="100px" height="100px"/></span> <hr />from ToniVR
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer