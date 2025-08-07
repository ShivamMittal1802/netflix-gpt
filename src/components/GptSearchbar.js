import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utils/LanguageConstants';


const GptSearchbar = () => {

    const selectedLanguage = useSelector(store=> store.Language.selectedLanguage);
    
  return (
    <div className='pt-[20%] flex justify-center' >
        <div className='w-1/3 bg-black grid grid-cols-12 '>
            <input className='m-2 col-span-8' placeholder={lang[selectedLanguage].placeholder}  />
            <button className= 'rounded-lg text-2xl  col-span-4 bg-red-700 text-black m-2 px-2' > {lang[selectedLanguage].search} </button>
        </div>
    </div>
  )
}

export default GptSearchbar
