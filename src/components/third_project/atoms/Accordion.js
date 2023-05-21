import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({items}) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index)=> {
    // if(expandedIndex !== index)
    //   setExpandedIndex(index);
    // else
    //   setExpandedIndex(-1);
    // THE PROBLEM WITH THESE IS setExpandedIndex does not immediately trigger and re renders. It does after some time. So in that case if we do $0.click(); $0.click(); two times, it will not call for the second time. Here we have to run the Functional State Update where the state is related with a condition for previous value.
    setExpandedIndex((currentExpandedIndex)=>{
      if(currentExpandedIndex === index){
        return -1;
      }else{
        return index;
      }
    })
  }
  return <>
    {items.map((item, index)=>{
      const isExpanded = index === expandedIndex;
      const icon = isExpanded ? <GoChevronDown /> : <GoChevronLeft/>
      return <>
        <div className="mb-3" key={index} >
          <div className="flex justify-between">
            <h1
            className="mb-1 text-4xl"
            >
              {item.label}
            </h1>
            <span onClick={() => handleClick(index)} className="cursor-pointer" >{icon}</span>
          </div>
          {isExpanded && (<p>{item.content}</p>)}
        </div>
      </>
    })}
  </>


}

export default Accordion


//Here 3 different arrow functions are created for 3 different values of index. each for each one. All of them are separate. Even though it seems there is one click event handler. But actually its not.


// Here HandleClick is used outside tha mapping function. So the index needed to be passed to it. Hence it should be written as an arrow func within the Div element. And the handleClick is to be defined outwards.
