import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/Constants'

const GptSearch = () => {
  return (
    <div>
        <div className="">
          <img
            className="absolute w-full -z-10"
            src={BG_URL}
            alt="background-image"
          />
        </div>
        <GptSearchbar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
