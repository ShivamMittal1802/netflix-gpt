import React from 'react';
import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {

  useNowPlayingMovies();
  const toggleGpt = useSelector(store => store.GptToggle);
  

  return (
    <div className=''>
        <Header/>
        {
          toggleGpt.GptToggle ? <GptSearch/> : <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        }
    </div>
  )
}

export default Browse
