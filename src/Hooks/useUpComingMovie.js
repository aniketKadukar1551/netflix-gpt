import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { API_OPTIONS } from '../utils/constants'
import { addUpComingMovie } from '../utils/nowPlayingMoviesSlice'

export const useUpComingMovie = () => {
    const dispatch = useDispatch()
    
    const fetchUpComingMovieData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS)
        const data = await response.json()
        dispatch(addUpComingMovie(data?.results))
    }
    
    useEffect(() => { 
        fetchUpComingMovieData()
    }, [])
}
