import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice"
import nowPlayingMoviesReducer from "./nowPlayingMoviesSlice"
import gptReducer from "./gptSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        nowPlayingMovie: nowPlayingMoviesReducer,
        gpt: gptReducer,
    }
})

export default appStore
