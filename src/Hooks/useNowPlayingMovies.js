import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/nowPlayingMoviesSlice'

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    
    const fetchNowPlayingData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const data = await response.json()
        dispatch(addNowPlayingMovies(data?.results))
    }
    
    useEffect(() => { 
        fetchNowPlayingData()
    }, [])
}
