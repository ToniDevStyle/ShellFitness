// Importa las librerías y componentes necesarios
import React, { useEffect, useState } from 'react'; 
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

// Define the functional component SearchExercises
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  // Initialize state variables
  const [search, setSearch] = useState(''); // State for search term
  const [bodyParts, setBodyParts] = useState([]); // State for the list of body parts

  // useEffect to fetch body parts data when the component mounts
  useEffect(() => {
    const fetchBodyPartsData = async () => {
      try {
        // Fetch body parts data from the API
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        console.log('Body parts data:', bodyPartsData);
        if (Array.isArray(bodyPartsData)) {
          // Update the body parts state with the fetched data
          setBodyParts(['all', ...bodyPartsData]);
        } else {
          console.error('bodyPartsData is not an array:', bodyPartsData);
        }
      } catch (error) {
        console.error('Failed to fetch body parts data:', error);
      }
    };

    fetchBodyPartsData();
  }, []);

  // Function to handle search logic
  const handleSearch = async () => {
    
    if (search) {
      window.scrollTo({top: 2100, left: 100, behavior: 'smooth'})
      try {
        // Fetch exercises data from the API
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', exerciseOptions);
        console.log('Exercises data:', exercisesData);
        if (Array.isArray(exercisesData)) {
          // Filter exercises based on the search term
          const searchedExercises = exercisesData.filter((item) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
          );
          console.log("filtered: ", searchedExercises);
          // Clear the search field and update the exercises state with the filtered exercises
          setSearch('');
          setExercises(searchedExercises);
        } else {
          console.error('exercisesData is not an array:', exercisesData);
        }
      } catch (error) {
        console.error('Failed to fetch exercises data:', error);
      }
    }
  };

  // JSX to render the component
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      {/* Title text */}
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      {/* Search field and button */}
      <Box position="relative" mb="72px" ml="50px">
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
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
          className='exercises-text-field'
          variant="outlined"
        />
        <Button className='btn-class-name'
          sx={{
            width: { lg: '80px', xs: '30px' },
            fontSize: { lg: '20px', xs: '14px' }, height: '56px', position: 'absolute',
          }}
          onClick={handleSearch}
        >
          <span className="back"></span>
          <span className="front"></span>
        </Button>
      </Box>
      {/* Horizontal scroll bar for body parts */}
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyParts} isBodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
}


// Exporta el componente SearchExercises
export default SearchExercises;
