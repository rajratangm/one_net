import React from 'react'
import { TMDB_IMG_URL } from '../utils/constants'

export const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-7'>
        <img src ={`${TMDB_IMG_URL}/${posterPath}`}/>
    </div>
  )
}
