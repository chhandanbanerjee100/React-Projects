import SortableTable from "../atoms/SortableTable";

function TablePage() {
  const data =[
    { name: "Orange", color: "bg-orange-500", score:5 },
    { name: "Banana", color: "bg-yellow-500", score:2 },
    { name: "Apple", color: "bg-red-500", score:3 },
    { name: "Lime", color: "bg-green-500", score:4 }
  ];

  const config = [
    { label: 'Name',
      render: (fruit)=> fruit.name,
      sortValue: (fruit)=> fruit.name,
    },
    { label: 'Color',
      render: (fruit)=> <div className={`m-2 p-3 ${fruit.color}`} ></div>
    },
    { label: 'Score',
      render: (fruit)=> fruit.score,
      sortValue: (fruit)=> fruit.score
    },
  ];

  const keyFn = (rowData)=>{
    return rowData.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} key={keyFn} />
    </div>
  )
}

export default TablePage
