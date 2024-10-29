import { createContext, useState } from "react";

const userContext = createContext(); //creating context

function UserProvider({ children }) {
  const [user, setUser] = useState("Guest");

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export { UserProvider, userContext };
