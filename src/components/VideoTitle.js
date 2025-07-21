import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-44 px-16 absolute bg-gradient-to-r from-black w-screen aspect-video text-white '>
      <div className='text-5xl font-bold' >{title}</div>
      <div className='w-1/3 mt-6'>{overview}</div>
      <div className='mt-6'>
        <button className='bg-gray-500 hover:opacity-75 text-white font-bold w-24 p-2'>▶️ Play </button>
        <button className='bg-gray-500 hover:opacity-75 text-white font-bold w-24 p-2 mx-4 '>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
