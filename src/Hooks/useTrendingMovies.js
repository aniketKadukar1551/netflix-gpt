import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { API_OPTIONS } from '../utils/constants'
import { addTrendingMovies } from '../utils/nowPlayingMoviesSlice'

export const useTrendingMovies = () => {
    const dispatch = useDispatch()
    
    const fetchTrendingMovieData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS)
        const data = await response.json()
        dispatch(addTrendingMovies(data?.results))
    }
    
    useEffect(() => { 
        fetchTrendingMovieData()
    }, [])
}
