import { Route, Routes,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import {Login} from "./pages/Login";
import {UserProvider} from "./providers/userProvider"
function App() {
  //hooks
  const navigate = useNavigate();
  const [isAthuatication, setAuthentication] = useState(false);

  //useeffect
  useEffect(() => {
    if (isAthuatication) {
      navigate("/");
    }
  }, [isAthuatication]);
  return (
    <UserProvider>
      <Routes>
        <Route
          path="/"
          element={<Login setAuthentication={setAuthentication} />}
        ></Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
