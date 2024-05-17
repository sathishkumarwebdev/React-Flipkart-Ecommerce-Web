import { useContext,useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { CartPrice } from "../components/CartPrice";
import { Cart } from "../components/Cart";
import { cartContext } from "../providers/CartProvider";
import { userContext } from "../providers/userProvider";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export function OrderSummary() {

    //hooks
    
const navigate=useNavigate();
  const context = useContext(cartContext);
  const { cart, dispatch } = context;
  const userDataContext = useContext(userContext);
  const { userData } = userDataContext;
    // const { address } = userData;
// function handleNavigate(){
//     navigate("/")
// }   


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
              <div className="cart-items-container-main">
                <div className="selelcted-title">
                  <div className="num-box color-box">3</div>
                  ORDER SUMMARY
                </div>
                <div className="cart-items-container">
                  {cart.map((cart) => (
                    <Cart cart={cart} dispatch={dispatch} key={cart.id} />
                  ))}
                  <div className="brand-free-container">
                    <div className="brand-free-box">
                      <div className="free-img">
                        <img
                          src="https://rukminim2.flixcart.com/image/144/144/xif0q/digital-voucher-code/r/i/k/-original-imagrfhwvn4dfest.jpeg?q=90"
                          alt="spotiffy-pre"
                        />
                      </div>
                      <div>
                        <div className="offer-box">
                          <div className="offer-detail">
                            Free Coupon to get the 3 months Spotify Premium at a
                            discounted rate of Rs. 119/-
                          </div>
                          <div className="offer-date">16/11/2024</div>
                          <div className="offer-rate">
                            $0 <span>Free</span>
                          </div>

                          <div className="offer-des">
                            . This is a free giveaway as part of your purchase.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="brand-free-container">
                    <div className="brand-free-box">
                      <div className="free-img">
                        <img
                          src="https://rukminim2.flixcart.com/image/144/144/xif0q/digital-voucher-code/z/j/y/-original-imagys6vkczygmxm.jpeg?q=90"
                          alt="cleartrip"
                        />
                      </div>
                      <div>
                        <div className="offer-box">
                          <div className="offer-detail">
                            Cleartrip Flat Rs 1000 off on hotels booking along
                            with 300 supercoins on booking
                          </div>
                          <div className=" offer-date">Till 30th April'24</div>
                          <div className="offer-rate">
                            $0 <span>Free</span>
                          </div>

                          <div className="offer-des">
                            . This is a free giveaway as part of your purchase.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brand-free-container">
                  <div className="brand-free-box">
                    <div className="free-img">
                      <img
                        src="https://rukminim2.flixcart.com/image/144/144/xif0q/digital-voucher-code/z/j/y/-original-imagys6vkczygmxm.jpeg?q=90"
                        alt="cleartrip"
                      />
                    </div>
                    <div>
                      <div className="offer-box">
                        <div className="offer-detail">
                          Flat Rs 650 off on Cleartrip flights booking along
                          with 500 supercoins on booking
                        </div>
                        <div className="offer-date">Till 30th April'24</div>
                        <div className="offer-rate">
                          $0 <span>Free</span>
                        </div>

                        <div className="offer-des">
                          . This is a free giveaway as part of your purchase.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="placeorder-items box-shadow ">
                <div className="placeorder-items-box">
                  <div>
                    Order confirmation email will be sent to{" "}
                    <span className="bold">{userData.email}</span>
                  </div>
                  &nbsp;&nbsp;
                  <Link to={'/Payment'}>
                    <div className="continue-btn">CONTINUE</div>
                  </Link>
                </div>
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
