import { Route, Routes,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import {Login} from "./pages/Login";
import {NewUser} from "./pages/NewUser";
import {Products} from "./pages/Products"
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
          path="/Login"
          element={<Login setAuthentication={setAuthentication} />}
        ></Route>
        <Route path="/Newuser" element={<NewUser />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
