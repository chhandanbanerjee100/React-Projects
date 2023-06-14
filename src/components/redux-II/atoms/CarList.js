import { useSelector, useDispatch } from "react-redux"
import { removeCar } from "../store/Index";

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(({cars: {data, searchTerm}})=>{
    return data.filter((car)=> car.name.toLowerCase().includes(searchTerm.toLowerCase()));
  })

  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  }
  const renderedCars = cars.map((car)=> {
    return (
      <div key={car.id} className="flex w-2/3 items-center py-2 px-4 bg-gray-200 rounded-lg mb-2">
        <span className="text-lg font-semibold flex-grow">{car.name}</span>
        <span className="text-lg font-semibold flex-grow">${car.cost}</span>
        <button
        onClick={() => handleDelete(car)}
        className="ml-4 p-2 rounded text-white bg-red-500 border border-red-600"
        >
          Delete
        </button>
      </div>
    )
  })
  return (
    <div>
      <div className= "flex w-2/3 items-center font-semibold text-xl justify-between my-3" >
        <span>Name</span>
        <span>Cost</span>
        <span>Actions</span>
      </div>
      {renderedCars}
    </div>
  )
}

export default CarList
