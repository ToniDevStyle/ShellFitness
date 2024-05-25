// Import necessary libraries and components from React and MUI
import React, { useEffect, useState } from 'react'; 
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

// Define the functional component SearchExercises
const SearchExercises = ( {setExercises, bodyPart, setBodyPart}) => {
  // Initialize state variables
  const [search, setSearch] = useState(''); // State for search input
  const [bodyParts, setBodyParts] = useState([]); // State for list of body parts

  // useEffect hook to fetch body parts data when the component mounts
  useEffect(() => {
    // Define an async function to fetch body parts data
    const fetchExercisesData = async () => {
      try {
        // Fetch data from the API
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        console.log('Body parts data:', bodyPartsData); // Debugging log
        if (Array.isArray(bodyPartsData)) {
          // If the fetched data is an array, update the bodyParts state
          setBodyParts(['all', ...bodyPartsData]);
        } else {
          // Log an error if the fetched data is not an array
          console.error('bodyPartsData is not an array:', bodyPartsData);
        }
      } catch (error) {
        // Log an error if fetching data fails
        console.error('Failed to fetch body parts data:', error);
      }
    };

    // Call the async function
    fetchExercisesData();
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to handle search logic
  const handleSearch = async () => {
    if (search) {
      try {
        // Fetch exercises data from the API
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        console.log('Exercises data:', exercisesData); // Debugging log
        if (Array.isArray(exercisesData)) {
          // Filter exercises based on search input
          const searchedExercises = exercisesData.filter((exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
          );
          // Update exercises state with the filtered exercises
          setExercises(searchedExercises);
        } else {
          // Log an error if the fetched data is not an array
          console.error('exercisesData is not an array:', exercisesData);
        }
        // Clear the search input
        setSearch('');
      } catch (error) {
        // Log an error if fetching data fails
        console.error('Failed to fetch exercises data:', error);
      }
    }
  };

  // Return JSX to render the component
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      {/* Title section */}
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      {/* Search box section */}
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' }
          }}
          height="76px"
          value={search} // Controlled input value
          onChange={(e) => setSearch(e.target.value.toLowerCase())} // Update search state on input change
          placeholder='Search Exercises'
          type='text'
          className='exercises-text-field'
          variant="outlined"
        />
        <Button className='search-btn'
          style={{ backgroundColor: "#ff89a9", color: "black", padding: '15px', opacity: '0.5' }}
          sx={{
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' }, height: '56px', position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch} // Trigger search on button click
        >
          Search
        </Button>
      </Box>
      {/* Horizontal scroll bar for body parts */}
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  );
}

// Export the SearchExercises component as default
export default SearchExercises;
