import React, { useState, useEffect } from "react";
import { Typography, Stack, Button } from "@mui/material";

import Target from "../assets/icons/target.png";
import Equipment from "../assets/icons/all.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  // Use useState to store the icon source
  const [iconSrc, setIconSrc] = useState(null);

  // Use useEffect to dynamically load the icon when the value of item changes
  useEffect(() => {
    const fetchIcon = async () => {
      try {
        // Dynamically import the icon based on the value of item
        const { default: icon } = await import(`../assets/icons/${bodyPart}.png`);
        setIconSrc(icon);
      } catch (error) {
        console.error("Error loading icon:", error);
      }
    };

    fetchIcon(); // Call the fetchIcon function when the value of item changes
  }, [bodyPart]); // item is a dependency, so useEffect will run whenever item changes

  const extraDetail = [
    {
      icon: iconSrc,
      name: bodyPart,
    },
    {
      icon: Target,
      name: target,
    },
    {
      icon: Equipment,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform="capitalize" variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep yout strong and 
          {" " + name} is one of the best exercises to target your {target}. It
          will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#eddbc5",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={item.icon} width="55px" alt={bodyPart} style={{ width: '50px', height: "50px"}}/>
            </Button>
            <Typography textTransform="capitalize" variant="h5">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
