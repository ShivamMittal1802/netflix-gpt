import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import {API_OPTIONS} from '../utils/Constants';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
    console.log("JSON data second",json.results)
  }

  useEffect(()=>{
    getNowPlayingMovies();
  }, [])
}

export default useNowPlayingMovies;