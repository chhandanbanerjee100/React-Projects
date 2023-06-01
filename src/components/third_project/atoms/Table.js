import { Fragment } from "react";
function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    return column.header ? (
      <Fragment key={column.label}>
        {column.header()}
      </Fragment>
    ) :
      (
        <th className="p-3" key={column.label}>
          {column.label}
        </th>
      )
  })
  const renderedRows = data.map((rowData, index1) => {
    const renderedCells = config.map((column, index2) => {
      return <td key={index2} className="p-3" >{column.render(rowData)}</td>
    });
    return (
      <tr className="border-b" key={index1} >
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2" >
      <thead>
        <tr className="border-b-2" >
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  )
}

export default Table


// We will create a config where we can decide which column to sort and which to not
//
/*
 const arr = [5, 2, 4,3]
  cdata.sort(a,b)=>{
    return a-b;
  }

  [5, 2, 4,3]
   b  a

   a-b < 0 ? Swap (It means since a is less than b, a should come before b)

   [2, 5, 4, 3]
       b  a
    a-b < 0 ? Swap

    [2, 4, 5, 3]
           b  a
    a-b < 0 ? Swap

    [2, 4, 3, 5]

*/
