import React, {useState} from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

// Define the 'Home' component of the application.
const Home = () => {
  // Create a state variable 'bodyPart' with the initial value 'all' and a function 'setBodyPart' to update it.
  const [bodyPart, setBodyPart] = useState('all');
  
  // Create a state variable 'exercises' with the initial value of an empty array and a function 'setExercises' to update it.
  const [exercises, setExercises] = useState([]); // State for list of exercises
  
  // Return the JSX that defines the UI for the Home component.
  return (
    // Use the 'Box' component to contain the content of the Home component.
    <Box>
      {/* Render the 'HeroBanner' component. */}
      <HeroBanner />
      {/* Render the 'SearchExercises' component, passing down the 'setExercises', 'bodyPart', and 'setBodyPart' as props. */}
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      {/* Render the 'Exercises' component, passing down the 'setExercises', 'bodyPart', and 'exercises' as props. */}
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home