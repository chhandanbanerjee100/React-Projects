import CarForm from "./atoms/CarForm";
import CarList from "./atoms/CarList";
import CarSearch from "./atoms/CarSearch";
import CarValue from "./atoms/CarValue";
function Index() {
  return (
    <div className="m-3" >
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}

export default Index

/*
Redux Store Design
  1. Identify what state exists in the app
  2. Identify How it changes over time
  3. Group together common pieces of state
  4. Create a Slice for each group
States We Need
  1. name
  2. cost
  3. searchTerm
  4. cars
Redux Design
  1. changeName
  2. changeCost
  3. changeSearchTerm
  4. addCar
  5. removeCar
Slice Design
  1. Generally implemented after looking for common things

State Related to CRUD
  1. name
  2. cost
  3. changeName
  4. changeCost

State related to Listing Cars
  1. searchTerm
  2. cars
  3. changeSearchTerm
  4. addCar
  5. removeCar
*/
