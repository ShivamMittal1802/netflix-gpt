import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addTrailerId } from '../utils/moviesSlice';

const useMovieVideo = (movieId) => {
    const dispatch = useDispatch();
  
    const getMovieVideos = async () => {
      const URL = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
      const data = await fetch(
        URL,
        API_OPTIONS
      );
      const json = await data.json();
  
      const filterData = json.results.filter((item) => item.type === "Trailer");
      const trailer = filterData ? filterData[0] : json.results[0];
  
      dispatch(addTrailerId(trailer));
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);
  
}

export default useMovieVideo
