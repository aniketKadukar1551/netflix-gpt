import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    isGptSearch: false,
  },
  reducers: {
    changeIsGptSearch: (state) => {
      state.isGptSearch = !state.isGptSearch
    }
  }
})

export const { changeIsGptSearch } = gptSlice.actions
export default gptSlice.reducer
