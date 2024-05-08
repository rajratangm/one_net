import React from 'react'
import { IoPerson } from "react-icons/io5";
import LOGO from "./logo1.png"; // Import the image file

export const Header = () => {
  return (
    <div className='absolute z-10 flex  w-[100%] items-center px-6 justify-between bg-gradient-to-b from-black'>
            <img className='w-56 h-14' src={LOGO} alt="netflix-logo" />
            <div className='flex items-center'>
            <IoPerson size='24px' color='white'/>
              <h1 className='text-lg font-medium text-white'>
                Rajratan Mern Stack
              </h1>
              <div className='ml-4'>
              <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
              <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
              </div>
             
            </div>
    </div>
  )
}
