import { createSlice } from "@reduxjs/toolkit"

const nowPlayingMoviesSlice = createSlice({
    name: "nowPlayingMovie",
    initialState: {
        nowPlaying: null,
        nowPlayingTrailer: null,
        trendingMovie: null,
        topRatedMovie: null,
        upComingMovie: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload
        },
        addNowPlayingMoviesTrailer: (state, action) => {
            state.nowPlayingTrailer = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovie = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovie = action.payload
        },
        addUpComingMovie: (state, action) => {
            state.upComingMovie = action.payload
        }
    },
})

export const { addNowPlayingMovies, addNowPlayingMoviesTrailer, addTrendingMovies, addTopRatedMovies, addUpComingMovie } = nowPlayingMoviesSlice.actions
export default nowPlayingMoviesSlice.reducer
