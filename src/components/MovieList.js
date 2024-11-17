import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className = "text-white">
      <h1 className = "p-4 font-bold text-2xl">{title}</h1>
      <div className = "flex overflow-x-scroll no-scrollbar">
        <div className = "flex p-4">
          {movies?.map(movie => <MovieCard  key={movie?.id} posterPath={movie?.poster_path}/>)}
        </div>
      </div>
    </div>
  )
}

export default MovieList