import useSort from "../hooks/useSort";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn} = useSort({data, config});
  const updatedConfig = config.map((column)=>{
    if(!column.sortValue){
      return column;
    }
    return {
      ...column,
      header: ()=> (<th className="cursor-pointer hover:bg-gray-100" onClick={()=> setSortColumn(column.label)} >
                      <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                      </div>
                    </th>)

    }
  })

  return (
    <>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </>
  )
}

function getIcons(label, sortBy, sortOrder){
  if(label !== sortBy || sortOrder == null){
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    )
  }

  if(sortOrder === "desc"){
    return <GoArrowSmallDown />;
  }

  if(sortOrder === "asc"){
    return <GoArrowSmallUp />;
  }
}

export default SortableTable


/*
Calling a sort function on an array modifies the data array which is also a prop. SO dont do that in react. instead copy it
*/
