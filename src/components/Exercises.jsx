import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

// Define the Exercises functional component
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // State variables to manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // Function to handle pagination
  const paginate = (e, value) => {
    setCurrentPage(value);

    // Smooth scroll to the top of the page when paginating
    window.scrollTo({ top: 1900, behavior: 'smooth' })
  }

  // useEffect to fetch exercises data when the bodyPart changes
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      // Fetch exercises data based on the selected body part
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', exerciseOptions)
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1300`, exerciseOptions)
      }

      // Update the exercises state with the fetched data
      setExercises(exercisesData);
    }
    fetchExercisesData();
  }, [bodyPart])

  // JSX to render the component
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      {/* Title */}
      <Typography variant="h3" mb="46px">
        Exercises Showing Results
      </Typography>
      {/* Stack to display ExerciseCards */}
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {/* Map through currentExercises and render ExerciseCard for each exercise */}
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      {/* Pagination */}
      <Stack mt="100px" alignItems="center">
        {/* Render Pagination component if there are more than 9 exercises */}
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};
export default Exercises;
