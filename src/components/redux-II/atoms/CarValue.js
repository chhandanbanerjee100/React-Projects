import { useSelector } from "react-redux";
function CarValue() {
  const totalValue = useSelector(({cars: {data, searchTerm}})=>{
    return  data
      .filter((car)=> car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc,cur)=> acc + cur.cost, 0);
  })
  return (
    <div>
      <span className="font-semibold text-2xl" >Total Value: {totalValue}</span>
    </div>
  )
}

export default CarValue
