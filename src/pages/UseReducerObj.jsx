import { useReducer, useState } from "react";
export default function UseReducerObj() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type == "increment") {
      //   return { ...state, count: state.count + action.payload };
      return { ...state, count: state.count + state.incrementBy };
    } else if (action.type == "decrement") {
      //   return { ...state, count: state.count - action.payload };
      return { ...state, count: state.count + state.incrementBy };
    } else if (action.type == "setincrement") {
      return { ...state, incrementBy: action.payload };
    }
  }

  return (
    <div>
      {state.count} usereducer
      {/* <button onClick={() => dispatch({ type: "increment", payload: 2 })}> */}
      {/* <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button> */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <input
        type="number"
        value={state.incrementBy}
        onChange={(e) =>
          dispatch({ type: "setincrement", payload: Number(e.target.value) })
        }
      />
    </div>
  );
}
