// Importa las librerías y componentes necesarios
import React, { useEffect, useState } from 'react'; 
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

// Define el componente funcional SearchExercises
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  // Inicializa las variables de estado
  const [search, setSearch] = useState(''); // Estado para el término de búsqueda
  const [bodyParts, setBodyParts] = useState([]); // Estado para la lista de partes del cuerpo

  // useEffect para obtener datos de las partes del cuerpo cuando el componente se monta
  useEffect(() => {
    const fetchBodyPartsData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        console.log('Body parts data:', bodyPartsData);
        if (Array.isArray(bodyPartsData)) {
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

  // Función para manejar la lógica de búsqueda
  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', exerciseOptions);
        console.log('Exercises data:', exercisesData);
        if (Array.isArray(exercisesData)) {
          const searchedExercises = exercisesData.filter((item) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
          );
          console.log("filtered: ", searchedExercises);
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

//    // Function to handle search logic
// const handleSearch = async () => {
//   if (search) {
//     try {
//       let allExercises = [];
//       let currentPage = 1;
//       let totalPages = 1;

//       // Fetch exercises data from the API
//       do {
//         const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises?page=${currentPage}&limit=100`, exerciseOptions);
//         console.log('Exercises data (page', currentPage, '):', exercisesData); // Debugging log
        
//         if (Array.isArray(exercisesData)) {
//           allExercises = [...allExercises, ...exercisesData];
//           totalPages = exercisesData.meta.totalPages; // Assuming the API provides metadata about total pages
//         } else {
//           console.error('exercisesData is not an array:', exercisesData);
//           break;
//         }

//         currentPage++;
//       } while (currentPage <= totalPages);

//       console.log('All exercises:', allExercises);

//       // Filter exercises based on search input
//       const searchedExercises = allExercises.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase()) ||
//         item.target.toLowerCase().includes(search.toLowerCase()) ||
//         item.equipment.toLowerCase().includes(search.toLowerCase()) ||
//         item.bodyPart.toLowerCase().includes(search.toLowerCase())
//       );

//       // Update exercises state with the filtered exercises
//       console.log("filtered: ", searchedExercises);
//       setExercises(searchedExercises);
      
//     } catch (error) {
//       // Log an error if fetching data fails
//       console.error('Failed to fetch exercises data:', error);
//     }
//   }
// };


  // JSX para renderizar el componente
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
        <HorizontalScrollBar data={bodyParts} isBodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
}

// Exporta el componente SearchExercises
export default SearchExercises;
