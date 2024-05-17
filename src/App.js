import { Route, Routes,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import {Login} from "./pages/Login";
import {NewUser} from "./pages/NewUser";
import {Products} from "./pages/Products"
import {ProductDetail} from "./pages/ProductDetail";
import {YourCart} from "./pages/YourCart";
import {PlaceOrder} from "./pages/PlaceOrder";
import {OrderSummary} from "./pages/OrderSummary";
import {Payment} from "./pages/Payment";
import {UserProvider} from "./providers/userProvider";
import {CartProvider} from "./providers/CartProvider";
import {LoginProvider} from "./providers/LoginProvider";
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
      <CartProvider>
        <LoginProvider>
          <Routes>
            <Route
              path="/Login"
              element={<Login setAuthentication={setAuthentication} />}
            ></Route>
            <Route path="/Newuser" element={<NewUser />} />
            <Route path="/" element={<Products />} />
            <Route path="/ProductDetails" element={<ProductDetail />} />
            <Route path="/YourCart" element={<YourCart />} />
            <Route path="/PlaceOrder" element={<PlaceOrder />} />
            <Route path="/Ordersummary" element={<OrderSummary />} />
            <Route path="/Payment" element={<Payment />} />
          </Routes>
        </LoginProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
