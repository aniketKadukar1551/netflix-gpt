import { createSlice } from "@reduxjs/toolkit"

const nowPlayingMoviesSlice = createSlice({
    name: "nowPlayingMovie",
    initialState: {
        nowPlaying: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload
        }
    }
})

export const { addNowPlayingMovies } = nowPlayingMoviesSlice.actions
export default nowPlayingMoviesSlice.reducer
