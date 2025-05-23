import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { API_OPTIONS } from '../utils/constants'
import { addTopRatedMovies } from '../utils/nowPlayingMoviesSlice'

export const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    
    const fetchTopRatedMovieData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS)
        const data = await response.json()
        dispatch(addTopRatedMovies(data?.results))
    }
    
    useEffect(() => { 
        fetchTopRatedMovieData()
    }, [])
}
