import { useReducer } from "react";
import Button from "../atoms/Button";
import Panel from "../atoms/Panel";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const CHANGE_VALUE = 'change-value';
const ADD_VALUE = "add-value";
const reducer = (state, action)=> {
  switch(action.type){
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count+1                //We are deirectly modifying/mutating a state
      }
    case ADD_VALUE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count-1
      }
    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload
      }
    default:
      throw new Error("Unexpected Action Type " + action.type)
  }
}

function CounterPage({ initialCount }) {
  // const [count, setCount]= useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  })

  const increment = ()=>{
    // setCount(count+1);
    dispatch({
      type: INCREMENT_COUNT
    });
  }

  const decrement = ()=>{
    // setCount(count-1);
    dispatch({
      type: DECREMENT_COUNT
    });
  }

  const handleChange = (event)=> {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    // console.log( value)

    dispatch({
      type: CHANGE_VALUE,
      payload: value
    });
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ADD_VALUE
    })
  }

  return (
    <Panel className="m-3">
      <h1 className="text-3xl">Count is: {state.count}</h1>
      <div className="flex flex-row m-3">
        <Button outline primary onClick={increment} >Increment</Button>
        <Button outline primary onClick={decrement} >Decrement</Button>
      </div>
      <form className="m-3" onSubmit={handleSubmit}>
        <label> Add a lot!</label>
        <input type="number"
               value={state.valueToAdd || ''}
               className="p-1 m-3 bg-gray-50 border rounded border-blue-300"
               onChange={handleChange}
        />
        <Button outline secondary >Add it</Button>
      </form>

    </Panel>
  )
}

export default CounterPage


/*

UseState "state" = useReducer "state"

dispatch is more like setter function.

Initial value

Use state is for each individual. Use reducer is for all of the state as an object.
We try to create 1 single state variable which is like an object.

 state: {
  count: 10,
  valueToAdd: 0
}

  Any time we need to call re render we call dispatch function.
  When we call it, then react goes to reducer function and execute it at first.
  The first argument i.e, state will have the current state value.
  the 2nd argument i.e. action will have value whatever we pass inside dispatch function.

  Inside reducer function. Whatever we return will be the new state.

   No async/await, no request, no promises, no outside variables inside reducer func.

   return {
    ...state,
    count: state.count + 1
   }

   How useReducer works
   Inside a switch case
   eg. ADD_VALUE

   currentState{
    count: 10,
    valueToAdd: 20
   }

   It updates to

   {
    count: 10 + 20,
    valueToAdd: 0
   }

   Then Why ...state is needed??

   At some pt of time, we might add some new state properties

   like {
    count,
    valueToAdd,
    anotherProperty
   }

   if we left out ...state
   and
   return {
    count,
    valuetToAdd
   }

   then "anotherProperty" is gong to be lost.

   TIPS:
   1. Dont put logic inside the dispatch and payload
   2. Put Logic inside the reducer function

   Normal Reducer:
   1. No directly changing the state
   2. Must return a new value to use for the state

   Reducer with Immer:
   1. We can mutate the state
   2. We dont have to return a new value
   3. Add return statement inside each case so as to break the func after its executed

   eg:  case INCREMENT_COUNT:
          state.count = state.count + 1;
          return;
        case ...


        const [state, dispatch] = useReducer(produce(reducer), {
          count: initialCount,
          valueToAdd: 0
        });
*/
