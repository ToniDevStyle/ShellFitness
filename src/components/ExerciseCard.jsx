import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
  };

  return (
    // Link component to navigate to exercise details page
    <Link className="exercise-card" to={`/exercise/${exercise.id}`} onClick={handleClick}>
      {/* Exercise image */}
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      
      {/* Stack to display buttons */}
      <Stack direction="row">
        {/* Button for exercise body part */}
        <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        
        {/* Button for exercise target */}
        <Button sx={{ ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>
      
      {/* Exercise name */}
      <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">
        {exercise.name}
      </Typography>
    </Link>
  );
};
export default ExerciseCard;
