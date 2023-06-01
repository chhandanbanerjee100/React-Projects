import { useState } from "react";

function useSort({data, config}) {
  const [sortOrder, setSortOrder]= useState(null);
  const [sortBy, setSortBy]= useState(null);

  const setSortColumn = (label)=>{
    // console.log(label);
    if(sortBy && sortBy !== label){
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if(sortOrder==null){
      setSortOrder("asc");
      setSortBy(label);
      console.log(sortBy, sortOrder)
    } else if(sortOrder ==="asc"){
      setSortOrder("desc")
      setSortBy(label);
      console.log(sortBy, sortOrder)
    } else if(sortOrder === "desc"){
      setSortOrder(null);
      setSortBy(null);
      console.log(sortBy, sortOrder)
    }
    // setSortBy(label);
  }

  //only sort a data if sort order and sort by are available
  // make a copy of data
  //find the correct sortValue function.
  let sortedData = data;
  if(sortOrder && sortBy){
    let { sortValue } = config.find((column)=> column.label === sortBy )
    sortedData = [...data].sort((a, b)=>{
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if(typeof valueA ==='string'){
        return valueA.localeCompare(valueB) * reverseOrder;
      }else{
        return (valueA - valueB) * reverseOrder;
      }
    })
  }


  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn
  }
}

export default useSort
