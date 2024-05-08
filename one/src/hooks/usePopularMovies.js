import React from 'react'
import axios from 'axios'
import { Popular_Movie, options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { getPopularMovie } from '../redux/movieSlice'

const usePopularMovies= async()=>{
    const dispatch = useDispatch()
    try{
        const res = await axios.get(Popular_Movie, options)
        dispatch(getPopularMovie(res.data.results))
        

    }
    catch(error){
        console.log(error)

    }

}

export default usePopularMovies