import React from 'react'
import { FaCaretRight } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ movie_title, description }) => {

  return (
    <div className='pt-96 pl-40'>
      <h1 className='text-5xl font-bold'>{movie_title}</h1>
      <p className='w-2xl mt-3'>{description}</p>
      <div className='mt-5 flex'>
        <button className='text-2xl font-bold px-10 py-3 rounded-lg bg-white flex'><FaCaretRight className='text-3xl mr-2'/>Play</button>
        <button className='text-2xl font-bold ml-4 px-8 py-3 rounded-lg bg-gray-400 flex'><IoMdInformationCircleOutline className='text-3xl mr-2'/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle