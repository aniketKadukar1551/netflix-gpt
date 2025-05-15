import { createSlice } from "@reduxjs/toolkit"

const nowPlayingMoviesSlice = createSlice({
    name: "nowPlayingMovie",
    initialState: {
        nowPlaying: null,
        nowPlayingTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload
        },
        addNowPlayingMoviesTrailer: (state, action) => {
            state.nowPlayingTrailer = action.payload
        },
    },
})

export const { addNowPlayingMovies, addNowPlayingMoviesTrailer } = nowPlayingMoviesSlice.actions
export default nowPlayingMoviesSlice.reducer
