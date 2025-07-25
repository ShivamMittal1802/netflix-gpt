import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'


const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies);
    if(!movies) return;

    const movie = movies[0];
    const {original_title, overview, id} = movie;
    console.log(movie)
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
