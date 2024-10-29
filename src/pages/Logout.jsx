import { useContext } from "react";
// import { userContext } from "../context/UserContext";

import { userContext } from "../pages/UserContextReducer";
export default function Logout() {
  // const { setUser } = useContext(userContext);

  const { dispatch } = useContext(userContext); //for reducer
  return (
    <div>
      <button onClick={() => dispatch({ type: "logout", payload: "Guest" })}>
        Logout
      </button>
    </div>
  );
}
