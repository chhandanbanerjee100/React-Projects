import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    // 'song' + '/' + 'addSong' = type = 'song/addSong'
    addMovie(state, action) {
      // This state is not the state of the big object in the store
      // It is the piece of state managed by the reducer

      state.push(action.payload);
      // We are allowed to mutate
    },
    removeMovie(state, action) {
      // action.payload === string we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers: (build) => {
    build.addCase(reset, (state, action)=>{
      return [];
    })
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer;
