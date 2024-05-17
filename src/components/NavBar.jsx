import logo from "../assets/flipkart-logo.png";
import plus from "../assets/plus.png";
import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../providers/CartProvider";
import { userContext } from "../providers/userProvider";
import { CartCount } from "../components/CartCount";
import { TiArrowSortedUp } from "react-icons/ti";
export function NavBar() {
  const [userMouseMove, setUserMouseMove] = useState(false);
  const context = useContext(cartContext);
  const userDataContext = useContext(userContext);
  const { cart } = context;
  const { userData } = userDataContext;
  const navigate = useNavigate();

  const { firstName, lastName } = userData;
  const cartQty = cart.reduce((acc, cart) => acc + cart.qty, 0);
  function yourCart() {
    navigate("/YourCart");
  }
  function handleMouseOver() {
    setUserMouseMove(!userMouseMove);
  }

  return (
    <header>
      <nav>
        <div className="logo-container">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="flipkart" title="flipkart" />
            </Link>
          </div>
          <div className="explore">
            <p>
              Explore<span>plus</span>
            </p>
            <img src={plus} alt="plus" />
          </div>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            autoComplete="off"
          />
          <FaSearch color="blue" size={18} />
        </div>
        <div className="username-nav-item">
          {firstName ? (
            <div
              className="user-name"
              onMouseOver={(e) => {
                e.stopPropagation();
                handleMouseOver();
              }}
            >
              {firstName}&nbsp;{lastName}
              {userMouseMove ? (
                // <div className="userProfile-box">
                //   <div className="arrow-box">
                //     <TiArrowSortedUp/>
                //   </div>
                //   <div>hi</div>
                // </div>
                <div className="dropdown-list">
                  <div className="arrow">
                    <TiArrowSortedUp size={50} />
                  </div>
                  <div className="profile-box">
                    <div>user profile</div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div>
              <Link to={"/Login"}>
                <button className="login-btn">Login</button>
              </Link>
            </div>
          )}
        </div>
        <div className="nav-item">Become a seller</div>
        <div className="nav-item">More</div>
        <div className="cart" onClick={() => yourCart()}>
          <FaShoppingCart color="white" fontSize={"24px"} />
          {cartQty == 0 ? (
            ""
          ) : (
            <div className="cart-qty">
              <CartCount cart={cart} />
            </div>
          )}

          <span>Cart</span>
        </div>
      </nav>
    </header>
  );
}
