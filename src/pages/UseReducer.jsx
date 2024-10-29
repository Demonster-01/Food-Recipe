import { useReducer, useState } from "react";
export default function App() {
  const [count, setCount] = useState(0); //useState hook
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type == "increment") {
      return state + action.payload;
    } else if (action.type == "decrement") {
      return state - action.payload;
    }
  }

  return (
    <>
      <div>
        {count} usestate
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <div>
        {state} usereducer
        <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          Decrement
        </button>
      </div>
    </>
  );
}
