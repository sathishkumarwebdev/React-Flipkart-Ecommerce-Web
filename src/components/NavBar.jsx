import logo from "../assets/flipkart-logo.png";
import plus from "../assets/plus.png";
import { useState,useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { TiArrowSortedUp } from "react-icons/ti";
import {userContext} from "../providers/userProvider"

export function NavBar() {
  const navigate = useNavigate();
 const userDataContext = useContext(userContext);
 const { userData } = userDataContext;
  const { firstName, lastName } = userData;

  return (
    <header>
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="flipkart" title="flipkart" />
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
            <div>
              {firstName}&nbsp;{lastName}
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
        <div className="cart">
          <FaShoppingCart color="white" fontSize={"24px"} />

          <span>Cart</span>
        </div>
      </nav>
    </header>
  );
}
