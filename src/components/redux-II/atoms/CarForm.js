import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store/Index";
import Button from "../../third_project/atoms/Button";
// import { useState } from "react";

function CarForm() {
  // const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state)=> {
    return {
      name: state.form.name,
      cost: state.form.cost
    }
  })
  const handleNameChange = (event)=> {
    // console.log(event.target.value)
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event)=> {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name, cost);
    dispatch(addCar({
      name, cost
    }))
  }

  return (
    <div>
      <h4 className="text-3xl">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <label className="text-xl" htmlFor="">Name</label>
        <input
          type="text"
          className="mx-3 bg-gray-100 border border-red-200 my-3 p-1"
          onChange={handleNameChange}
          value={name}
        />
        <br />
        <label className="text-xl" htmlFor="">Cost</label>
        <input
          type="number"
          className="mx-3 bg-gray-100 border border-red-200 my-3 ml-6 p-1"
          onChange={handleCostChange}
          value={cost || ""}
        />
        <br />
        <Button primary rounded>Submit</Button>
      </form>
      <hr className="my-2 border-2 border-blue-500 cursor-pointer hover:border-red-500 duration-500" />
    </div>

  )
}

export default CarForm
