import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Define the main 'App' component of the application.
const App = () => {
  return (
    // Use the 'Box' component for layout, setting a fixed width and centering the content.
    <Box width="400px" sx={{width: { x1: '1488px'}}} m="auto">
        {/* Render the 'Navbar' component at the top of the application. */}
        <Navbar />
        {/* Define the routes for the application using 'Routes' and 'Route'. */}
        <Routes>
            {/* Route for the home page, rendering the 'Home' component. */}
            <Route path='/' element={<Home />} />
            {/* Route for the exercise detail page, rendering the 'ExerciseDetail' component. */}
            <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        {/* Render the 'Footer' component at the bottom of the application. */}
        <Footer />
    </Box>
  )
}


export default App