import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    searchTerm: ""
  },
  reducers: {
    changeSearchTerm(state, action){
      state.searchTerm = action.payload;
    },
    addCar(state, action){
      // Assumption: payload will have {id: 1, name: "ford", cost: 140}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      })
    },
    removeCar(state, action){
      // action.payload will be id of the car we are trying to delete
      const updatedCars = state.data.filter((car)=> car.id !== action.payload );
      state.data = updatedCars;
    }
  }
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer
/*
ln 15 and 16 the reason we are not getting values from formSlice is that one slice cant get access to other. So the assumption is we are going to get it from action payload.
*/
