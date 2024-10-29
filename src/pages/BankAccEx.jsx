import { useReducer, useState } from "react";

export default function BankAccEx() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);
  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "Withdraw") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  return (
    <div>
      <input
        type="text"
        name=""
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {state.balance}
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "Withdraw", payload: Number(amount) })}
      >
        Withdraw
      </button>
    </div>
  );
}
