import { useContext, useState } from "react";
// import { userContext } from "../context/UserContext";

import { userContext } from "../pages/UserContextReducer";

export default function Login() {
  const [value, setValue] = useState("");
  // const { user, setUser } = useContext(userContext);

  const { user, dispatch } = useContext(userContext);

  function handleSubmit(e) {
    e.preventDefault();
    // setUser(value);
    dispatch({ type: "login", payload: value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  );
}
