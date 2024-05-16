import { useState, createContext } from "react";
export const loginContext = createContext(null);
export function LoginProvider(props) {
  const [token, setToken] = useState("");
  return (
    <loginContext.Provider value={{ token, setToken }}>
      {props.children}
    </loginContext.Provider>
  );
}
