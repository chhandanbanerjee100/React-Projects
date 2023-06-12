import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { reset } from "./actions";
// Store is the big state object or Top level Object
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
})

// console.log(songsSlice.actions)
// console.log(songsSlice.actions.addSong("some song"))
// This addSong func is different than above addSong reducer although same <name></name>. The func when called creates an action object
// You can also add a payload

export { store }
export { addMovie, removeMovie, addSong, removeSong, reset }
// console.log(moviesSlice.actions.reset.toString())
// These are all the action creators.

// console.log(store.getState());

// store.dispatch(
//   // {
//   // Method: 1
//   // type: 'song/addSong',
  // payload: "New Song"
//   // }

//   // Method 2 Using action creator/ slices

//   songsSlice.actions.addSong("Hello")
// )

// console.log(JSON.stringify(store.getState()));


/*
  The store is the object that will hold all of our state
  We ususally dont have to interact with it directly
  The "React-Redux" library will do that for us.


  To see what is inside store
    store.getState()

  We can directly modify the state of the individual reducers within the slice by mutating that state. As it uses Immer Library within.

  Logic of Store
  {
    currentuser: [{ id: 1 }],
    songs: {viewedIds: [4,5 6]},
    etc..
  }

  keys of the store are set when it is created.
  Values of the store gets created/updated/deleted when individual reducers are called.
  i.e. currentUser Reducer, song Reducer

  Slices
  1. Defines some initial state by 'initialState: []'
  2. COmbines mini-reducers into a big reducer
    It saves us from writing a lot of code like switch case and strings used in useReducer
    Each of the functions inside reducers act as a individual switch case statement.
    songsSlice has a reducer property which combines all of the individual reducer functions
  3. Creates set of 'action creator' functions
    actionCreators help us to dispatch the action which is not written in hardcoded as action objects.
    It works exactly the way when the store is dispatched manually by giving type anad a payload attribute.
*/
