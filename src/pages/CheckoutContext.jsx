import { createContext, useContext } from "react";
// import { userContext } from "../context/UserContext";

import { userContext } from "../pages/UserContextReducer";
export default function CheckoutContext() {
  const { user } = useContext(userContext);
  return <div>Context {user}</div>;
}
