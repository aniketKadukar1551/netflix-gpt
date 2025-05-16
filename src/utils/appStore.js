import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice"
import nowPlayingMoviesReducer from "./nowPlayingMoviesSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        nowPlayingMovie: nowPlayingMoviesReducer,
        gpt: gptReducer,
        config: configReducer,
    }
})

export default appStore
