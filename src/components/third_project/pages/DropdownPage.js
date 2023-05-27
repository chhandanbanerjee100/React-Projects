import { useState } from "react";
import Dropdown from "../atoms/Dropdown";
function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option)=>{
    setSelection(option);
    // console.log(option);
  }

  const options = [
   {label: "Red", value: "Red"},
   {label: "Green", value: "Green"},
   {label: "Blue", value: "Blue"}
  ]


  return (
    <div className="flex justify-between">
      <Dropdown options={options} selection={selection} onSelect={handleSelect}/>
    </div>
  )
}

export default DropdownPage

// Design
/*
  Click The DropDown  -- Event Handler
  List of Option Appears -- State
  Clicks an Option -- Event Handler
  List of Option Disappears -- State
  Clicked Label Appears on the Box -- State


  STATE DESIGN
  1. For Dropdown Menu Open, we can choose a boolean isOpen which will decide whether its open or closed. And we can define it in the dropdown page as no other component is related to that state.
  2. For Selecting the option, we can pass the object value as an argument and the item which is selected may be dependent for the rest of the components. So we need to define it in the parent component.

*/
