import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/detail";
import ExerciseVideos from "../components/exercise-videos";
import SimilarExercises from "../components/similar-exercises";

import { exerciseOptions, fetchData } from "../utils/fetch-data";

function ExerciseDetail() {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async() => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUtl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      
      setExerciseDetail(exerciseDetailData); 
    }
    fetchExercisesData();
    
  }, [id])
  


  return <Box>
    <Detail exerciseDetail={exerciseDetail} />
    <ExerciseVideos />
    <SimilarExercises />
  </Box>;
}

export default ExerciseDetail;
