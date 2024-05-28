import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Shell.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor='#2b2b2b'>
      <Stack gap='40px' alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt='logo' width="200px" height="200px" />
        <Typography variant='h6'mb="10px" pb="80px" >
          Made with 🤍 from ToniVR
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer