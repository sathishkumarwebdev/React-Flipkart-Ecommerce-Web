import { useContext } from "react";
import { NavBar } from "../components/NavBar";
import { CartPrice } from "../components/CartPrice";
import { cartContext } from "../providers/CartProvider";
import { userContext } from "../providers/userProvider";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export function PlaceOrder() {
  const context = useContext(cartContext);
  const { cart } = context;
  const userDataContext = useContext(userContext);
  const { userData } = userDataContext;
//   const { address } = userData;


  return (
    <>
      <NavBar />
      {userData ? <div className="your-cart-conatiner">
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
              <div className="delivery-address-container box-shadow ">
                <div className="delivery-address">
                  <div className="num-box color-box">2</div>
                  <div>Delivery Address</div>
                </div>
                <div className="the-address-box box-shadow">
                  <div className="the-address">
                    <div>
                      <input type="radio" checked />
                    </div>
                    <div>
                      <div>
                        <div>
                          &nbsp;&nbsp;
                          <span className="bold">{userData.firstName}</span>
                          <div className="address-type">HOME</div>&nbsp;&nbsp;
                          {userData.phone}
                        </div>
                        <div className="addresss-location">
                          {userData.address.address}, {userData.address.city}, {userData.address.state} -{" "}
                          {userData.address.postalCode}
                        </div>
                        <div className="deliver-herep-btn">Deliver Here</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="placeorder-items box-shadow blue-text">
                <span className="fontsize">+</span> &nbsp; &nbsp;Add a new
                address
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
          <div className="your-cart-total">
            <div className="cart-price-title">PRICE DETAILS</div>
            <div className="price-container ">
              <CartPrice cart={cart} />
            </div>
            {/* <div className="product-img">
              <img
                src="https://rukminim2.flixcart.com/lockin/100/100/images/promotion_banner_v2_active1.png?q=50"
                alt=""
              />
            </div> */}
            <div className="product-safty">
              <div>
                <IoShieldCheckmarkSharp size={28} />
              </div>
              <div className="safty-text">
                Safe and Secure Payments.100% Authentic products. 100% Authentic
                products.
              </div>
            </div>
          </div>
        </div>
      </div>:""}
     
    </>
  );
}
