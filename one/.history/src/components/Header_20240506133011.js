import React from 'react'

export const Header = () => {
  return (
    <div className='flex  w-[100%] items-center justify-between bg-gradient-to-b from-black'>
            <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
            <div className='flex'>
              <h1>
                Rajratan Mern Stack
              </h1>
              <div className='ml-4'>
              <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
              <button>Search Movie</button>
              </div>
             
            </div>
    </div>
  )
}
