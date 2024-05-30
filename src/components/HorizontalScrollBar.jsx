import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';


import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard'

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// Define the LeftArrow component
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  // Render the left arrow icon and handle click event to scroll to the previous item
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// Define the RightArrow component
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  // Render the right arrow icon and handle click event to scroll to the next item
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// Define the HorizontalScrollbar component
const HorizontalScrollbar = ({ data, isBodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {/* Map through the data and render each item */}
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {/* Render BodyPart component if isBodyParts is true, otherwise render ExerciseCard component */}
        {isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
