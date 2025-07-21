
import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  return (
    <div>
      <MoviesList movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer
