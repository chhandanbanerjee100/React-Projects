import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      if(!divEl.current.contains(event.target)){
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  })
  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  }

  const renderedItems = options.map(((option) => {
    return (
      <div
        className="hover:bg-sky-100 round cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  }))

  return (
      <div ref={divEl} className="w-48 relative" >
        <Panel className="flex justify-between items-center hover:bg-gray-200 cursor-pointer" onClick={handleClick} >
          {selection?.label || "Select..."}
          <GoChevronDown />
        </Panel>
        {isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}
      </div>
  )
}

export default Dropdown
