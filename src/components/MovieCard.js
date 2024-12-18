import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return;
  return (
    <div className = "w-48 pr-4">
        <img alt="movieImg" src = {IMG_CDN_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard