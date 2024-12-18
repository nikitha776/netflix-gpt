import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch : false,
    movieNames : null,
    movieResults : null
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchMovies : (state , action) => {
      const { movieNames , movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  },
});

export const { toggleGptSearch , addGptSearchMovies } = gptSlice.actions;

export default gptSlice.reducer;