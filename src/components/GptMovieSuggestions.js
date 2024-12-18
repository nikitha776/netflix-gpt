import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const { movieNames , movieResults } = useSelector((store) => store.gpt);
  if(!movieNames) return;
  return (
    <div className = "bg-black bg-opacity-80 p-4 m-4">
      {movieNames.map((movieName , index) => (<MovieList key={movieName} title={movieName} movies= {movieResults[index]}/>))}
    </div>
  )
}

export default GptMovieSuggestions