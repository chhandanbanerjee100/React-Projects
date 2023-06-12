import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // 'song' + '/' + 'addSong' = type = 'song/addSong'
    addSong(state, action) {
      // This state is not the state of the big object in the store
      // It is the piece of state managed by the reducer

      state.push(action.payload);
      // We are allowed to mutate
    },
    removeSong(state, action) {
      // action.payload === string we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action)=> {
      return [];
    })
  }
});

export const { addSong, removeSong } = songsSlice.actions
export const songsReducer = songsSlice.reducer;
