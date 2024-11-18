import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
    const videos = await data.json();
    // console.log(videos);
    const trailers = videos.results.filter((video) => video.type === "Trailer");
    // console.log(trailers);
    const trailer = trailers.length ? trailers[0] : videos.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    if(!trailer) getMovieVideos();
  }, []);
};

export default useMovieTrailer;