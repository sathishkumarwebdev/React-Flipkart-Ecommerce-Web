import { useState, createContext } from "react";
export const userContext = createContext(null);
export function UserProvider(props) {
  const [userData, setUserData] = useState([]);
  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </userContext.Provider>
  );
}
