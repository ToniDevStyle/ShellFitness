import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';

// Define the ExerciseDetail functional component
const ExerciseDetail = () => {
  // State variables to store exercise details, exercises with similar target muscles, and exercises with similar equipment
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  // useParams hook to extract the exercise id from the URL
  const { id } = useParams();

  // useEffect hook to fetch exercise data when the id parameter changes
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'; // Base URL for the exercise database API

      try {
        // Fetch exercise details based on the exercise id
        const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData); // Update the state with the fetched exercise detail

        // Fetch exercises with similar target muscles
        const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData); // Update the state with the fetched data

        // Fetch exercises with similar equipment
        const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
        setEquipmentExercises(equipmentExercisesData); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }
    };

    fetchExercisesData(); // Call the function to fetch exercise data
  }, [id]); // Dependencies array to trigger the effect when the id parameter changes

  // Render the Detail component to display exercise details and SimilarExercises component to display exercises with similar target muscles and equipment
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
