import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store/Index"

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=>{
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event)=> {
    dispatch(changeSearchTerm(event.target.value));
  }

  return (
    <div className="flex items-center justify-between" >
      <span className="text-3xl">My Cars</span>
      <div>
        <label>Search</label>
        <input
          type="text"
          className="mx-3 bg-gray-100 border border-red-200 my-3 p-1"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  )
}

export default CarSearch
