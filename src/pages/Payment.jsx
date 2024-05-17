import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { CartPrice } from "../components/CartPrice";
import {CartCount} from "../components/CartCount"
import { Cart } from "../components/Cart";
import { cartContext } from "../providers/CartProvider";
import { userContext } from "../providers/userProvider";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export function Payment() {
  //hooks

  const context = useContext(cartContext);
  const { cart, dispatch } = context;
  const userDataContext = useContext(userContext);
  const { userData } = userDataContext;
  const cardNumber=userData.bank.cardNumber;
  const cardLastDigit=cardNumber.slice(12,16);
  

  return (
    <>
      <NavBar />
      {userData.length !== 0 ? (
        <div className="your-cart-conatiner">
          <div className="your-cart ">
            <div className="placeorder-container ">
              <div className="login-info box-shadow">
                <div className="login-detail">
                  <div className="num-box">1</div>
                  <div>
                    <div className="login-text">LOGIN &#10004;</div>
                    <div className="placeorder-user">
                      <span className="bold">
                        {userData.firstName}&nbsp;
                        {userData.lastName}&nbsp;
                      </span>
                      {userData.phone}
                    </div>
                  </div>
                </div>
                <div className="change-btn">Change</div>
              </div>
              <div className="login-info box-shadow">
                <div className="login-detail">
                  <div className="num-box">2</div>
                  <div>
                    <div className="login-text">DELIVERY ADDRESS &#10004;</div>
                    <div className="placeorder-user">
                      <span className="bold">{userData.firstName},&nbsp; </span>
                      {userData.address.address}, &nbsp; {userData.address.city}
                      , &nbsp;{userData.address.state},&nbsp;
                      {userData.address.postalCode}.
                    </div>
                  </div>
                </div>
                <div className="change-btn">Change</div>
              </div>
              <div className="login-info box-shadow">
                <div className="login-detail">
                  <div className="num-box">3</div>
                  <div>
                    <div className="login-text">ORDER SUMMARY &#10004;</div>
                    <div className="placeorder-user">
                      <span className="bold">
                        <CartCount cart={cart} /> items
                      </span>
                    </div>
                  </div>
                </div>
                <div className="change-btn">Change</div>
              </div>

              <div className="delivery-address">
                <div className="num-box color-box">4</div>
                <div>PAYMENT OPTIONS</div>
              </div>
              <div className="payment-details-container">
                <div>
                  <input type="radio" checked />
                </div>
                <div>
                  <div>
                    <span> &nbsp; ABC Bank</span>
                    <span className="card-text card-text-size">
                      {" "}
                      xxxx xxxx xxxx
                    </span>
                    <span className="card-text card-text-size">
                      {" "}
                      {cardLastDigit}
                    </span>
                  </div>
                  <div>
                    <Link to={"/Payment"}>
                      <div className="continue-btn">CONTINUE</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="your-cart-total-container">
            <div className="your-cart-total">
              <div className="cart-price-title">PRICE DETAILS</div>
              <div className="price-container ">
                <CartPrice cart={cart} />
              </div>

              <div className="product-safty">
                <div>
                  <IoShieldCheckmarkSharp size={28} />
                </div>
                <div className="safty-text">
                  Safe and Secure Payments.100% Authentic products. 100%
                  Authentic products.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="your-cart-conatiner">
          <div className="your-cart ">
            <div className="placeorder-container ">
              <div className="selelcted-title">
                <div className="num-box color-box">1</div>
                login or signup
              </div>

              <div className="login-info-box box-shadow ">
                <div className="login-box-placeorder">
                  <div>please login or signup for place the order</div>
                  <Link to={"/Login"}>
                    <div className="delivery-here-btn">Login</div>
                  </Link>
                </div>
              </div>
              <div className="placeorder-items box-shadow grey-text ">
                <div className="num-box">2</div>{" "}
                <span className="bold"> DELIVERY ADDRESS </span>
              </div>
              <div className="placeorder-items box-shadow grey-text ">
                <div className="num-box">3</div>{" "}
                <span className="bold">ORDER SUMMARY</span>
              </div>
              <div className="placeorder-items box-shadow grey-text">
                <div className="num-box">4</div>{" "}
                <span className="bold">PAYMENT OPTIONS </span>
              </div>
            </div>
          </div>
          <div className="your-cart-total-container">
            {cart.length !== 0 ? (
              <div className="your-cart-total">
                <div className="cart-price-title">PRICE DETAILS</div>
                <div className="price-container ">
                  <CartPrice cart={cart} />
                </div>

                <div className="product-safty">
                  <div>
                    <IoShieldCheckmarkSharp size={28} />
                  </div>
                  <div className="safty-text">
                    Safe and Secure Payments.100% Authentic products. 100%
                    Authentic products.
                  </div>
                </div>
              </div>
            ) : (
              <div className="your-cart-total">
                {" "}
                <div className="product-safty">
                  <div>
                    <IoShieldCheckmarkSharp size={28} />
                  </div>
                  <div className="safty-text">
                    Safe and Secure Payments.100% Authentic products. 100%
                    Authentic products.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
