import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  useMovieTrailer(movieId);

  const trailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe className = "w-[100%] aspect-video" src={"https://www.youtube.com/embed/" + trailer?.key + "?si=GdaTJLvYZS9CkKIg" + "&autoplay=1&mute=1&loop=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" frameBorder = '0'></iframe>
    </div>
  )
}

export default VideoBackground