import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies}) => {

  return (
    <div className='bg-black text-white'>
        <div className='-mt-56 z-20 relative'>
            <MovieCard title={"Now Playing"} moviesList = {movies} />
            <MovieCard title={"Continue"} moviesList = {movies} />
            <MovieCard title={"Hot Trends"} moviesList = {movies} />
            <MovieCard title={"Newly Added"} moviesList = {movies} />
            <MovieCard title={"Hollywood"} moviesList = {movies} />
            <MovieCard title={"Old is Gold"} moviesList = {movies} />
        </div>
    </div>
  )
}

export default MoviesList
