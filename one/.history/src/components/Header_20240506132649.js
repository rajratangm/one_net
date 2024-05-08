import React from 'react'

export const Header = () => {
  return (
    <div className='flex  w-bg-gradient-to-b from-black'>
            <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
            <div>
              <h1>
                Rajratan Mern Stack
              </h1>
              <button>Logout</button>
              <button>Search Movie</button>
            </div>
    </div>
  )
}
