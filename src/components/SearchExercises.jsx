import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        console.log('Body parts data:', bodyPartsData); // Depuración
        if (Array.isArray(bodyPartsData)) {
          setBodyParts(['all', ...bodyPartsData]);
        } else {
          console.error('bodyPartsData is not an array:', bodyPartsData);
        }
      } catch (error) {
        console.error('Failed to fetch body parts data:', error);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        console.log('Exercises data:', exercisesData); // Depuración
        if (Array.isArray(exercisesData)) {
          const searchedExercises = exercisesData.filter((exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
          );
          setExercises(searchedExercises);
        } else {
          console.error('exercisesData is not an array:', exercisesData);
        }
        setSearch('');
      } catch (error) {
        console.error('Failed to fetch exercises data:', error);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
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
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyParts} />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
