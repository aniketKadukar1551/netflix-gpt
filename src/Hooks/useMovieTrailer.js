import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMoviesTrailer } from "../utils/nowPlayingMoviesSlice"

export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const fetchMovieVideo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const data = await response.json()
        const filterData = data?.results.filter(videoData => videoData?.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : data?.results[0]
        dispatch(addNowPlayingMoviesTrailer(trailer))
    }

    useEffect(() => {
        fetchMovieVideo()
    }, [])
}
