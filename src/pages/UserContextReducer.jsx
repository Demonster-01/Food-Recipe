import { createContext, useReducer, useState } from "react";

const userContext = createContext(); //creating context

function UserProvider_Reducer({ children }) {
  const [user, dispatch] = useReducer(userReducer, "Guest");

  function userReducer(state, action) {
    if (action.type == "login") {
      return action.payload;
    }
    if (action.type == "logout") {
      return action.payload;
    }
  }

  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export { UserProvider_Reducer, userContext };
