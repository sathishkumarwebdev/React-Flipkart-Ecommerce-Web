import { NavBar } from "../components/NavBar";
import { cartContext } from "../providers/CartProvider";
import { useContext, useState } from "react";
import { Cart } from "../components/Cart";
import { CartCount } from "../components/CartCount";
import { CartPrice } from "../components/CartPrice";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../providers/userProvider";
export function YourCart() {
  // const [products, setProducts] = useState([]);
  const context = useContext(cartContext);
  const userDataContext = useContext(userContext);
  const { cart, dispatch } = context;
  const { userData } = userDataContext;
  const { address, firstName } = userData;
  console.log(address);
  const navigate = useNavigate();


  // const qunatity = cart.reduce((acc, cart) => acc + cart.qty, 0);

  return (
    <>
      <NavBar />
      {cart.length === 0 ? (
        <div className="your-cart-conatiner">
          <div className="your-cart">
            <div className="your-cart-title">
              <div className="your-cart-flipkart">
                <div className="flipkart">
                  <span>Flipkart</span>
                </div>
              </div>
              <div className="your-cart-grocery">Grocery</div>
            </div>
            <div className="empty-cart">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                  alt="empty-cart"
                />
              </div>
              <div>
                <div>Your cart is empty!</div>
                <div className="small-text">Add items to it now.</div>
              </div>
              <div>
                <Link to={"/"}>
                  <button className="shop-btn">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="your-cart-conatiner">
          <div className="your-cart">
            <div className="your-cart-title">
              <div className="your-cart-flipkart">
                <div className="flipkart">
                  <span>
                    Flipkart &#40;
                    <CartCount cart={cart} />
                    &#41;
                  </span>
                </div>
              </div>
              <div className="your-cart-grocery">Grocery</div>
            </div>

            {address ? (
              <div className="your-cart-address">
                <div>
                  <span>Deliver to: </span>
                  <span className="bold">{firstName},</span>
                  <span className="bold">{address.postalCode}</span>
                  <div className="address-type">HOME</div>
                </div>
                <div className="your-cart-address-add">
                  <span>{address.address},</span>

                  <span>{address.city},</span>
                  <span>{address.state}.</span>
                </div>
              </div>
            ) : (
              ""
            )}

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
                        Cleartrip Flat Rs 1000 off on hotels booking along with
                        300 supercoins on booking
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
                        Flat Rs 650 off on Cleartrip flights booking along with
                        500 supercoins on booking
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
                <div className="place-order-container">
                  <Link to={"/PlaceOrder"}>
                    <button>PLACE ORDER</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="your-cart-total-container">
            <div className="your-cart-total">
              <div className="cart-price-title">PRICE DETAILS</div>
              <div className="price-container">
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
      )}
    </>
  );
}
