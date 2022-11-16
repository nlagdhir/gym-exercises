import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/hero-banner";
import SearchExercises from "../components/search-exercises";
import Exercises from "../components/exercises";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
}

export default Home;
