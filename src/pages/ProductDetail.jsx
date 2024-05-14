import { NavBar } from "../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { useState, useContext } from "react";
import { cartContext } from "../providers/CartProvider";

export function ProductDetail() {
  const navigate = useNavigate();
  const context = useContext(cartContext);
  const { cart, dispatch } = context;

  const location = useLocation();
  const data = location.state;
  const { product } = data;

  const {
    title,
    price,
    rating,
    discountPercentage,
    thumbnail,
    id,
    images,
    description,
    brand,
  } = product;

  // const [btn, setBtn] = useState(false);

  const cartMatch = cart.filter((item) => item.id === id);

  const btn = cartMatch.length === 0 ? false : true;

  const [imgBackground, setImageBackground] = useState(thumbnail);

  const addCart = (product) => {
    dispatch({ type: "addCart", payload: { product } });
  };

  function handleClick() {
    if (!btn) {
      const addProduct = { ...product, qty: 1 };
      addCart(addProduct);
    }
    if (btn) {
      navigate("/YourCart");
    }
  }

  // function handleAddCart(){
  // const addProduct = { ...product, qty: 1 };
  // addCart(addProduct);
  // setBtn(false)
  // }

  console.log("Cart::", cart);
  function imageChanger(imgs) {
    setImageBackground(imgs);
  }
  const discountValue = price * ((100 - discountPercentage) / 100);
  const value = discountValue.toFixed(1);

  return (
    <>
      <NavBar />

      <div className="product-detail-container">
        <div className="sticky-box">
          <div className="sub-container">
            <div className="img-collage">
              {images.map((imgs) => {
                return (
                  <div
                    className="collage"
                    onMouseMove={() => imageChanger(imgs)}
                  >
                    <img src={imgs} alt="pic" />
                  </div>
                );
              })}
            </div>
            <div
              className="product-thumbnail-img"
              style={{
                backgroundImage: `url(${imgBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "380px 430px",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="btn-box">
            <div className="add-cart-btn" onClick={() => handleClick()}>
              <FaShoppingCart />
              {btn ? <span>GO TO CART</span> : <span>ADD TO CART </span>}
            </div>
            <div className="buy-now-btn">
              <AiFillThunderbolt />
              <span>BUY NOW</span>
            </div>
          </div>
        </div>

        <div className="product-detail">
          <div className="product-detail-title">
            {brand}&nbsp;{title}
          </div>
          <div className="product-rating-box">
            <div>{rating.toFixed(1)}</div>

            <FaStar color="white" fontSize={10} />
          </div>
          <div className="product-price-conatiner">
            <div className="product-value">${value}</div>
            <div className="product-price">${price}</div>
            <div className="product-off">
              {discountPercentage.toFixed(1)}% off
            </div>
          </div>
          <div className="product-offer-container">
            <div className="product-offer-detail">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="tag"
                  width={18}
                  height={18}
                />
              </div>
              &nbsp;&nbsp;
              <div className="bold">Bank offer</div>&nbsp; &nbsp;
              <div>
                Get ₹25 instant discount on first Flipkart UPI txns on order of
                ₹250 and above
              </div>
              &nbsp; &nbsp;
              <div className="terms">T&C</div>
            </div>
            <div className="product-offer-detail">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="tag"
                  width={18}
                  height={18}
                />
              </div>
              &nbsp;&nbsp;
              <div className="bold">Bank offer</div>&nbsp; &nbsp;
              <div>5% Cashback on Flipkart Axis Bank Card</div>
              &nbsp; &nbsp;
              <div className="terms">T&C</div>
            </div>
            <div className="product-offer-detail">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="tag"
                  width={18}
                  height={18}
                />
              </div>
              &nbsp;&nbsp;
              <div className="bold">Bank offer</div>&nbsp; &nbsp;
              <div>
                ₹500 Off On Selected Banks Credit and Debit Card Transactions
              </div>
              &nbsp; &nbsp;
              <div className="terms">T&C</div>
            </div>
            <div className="product-offer-detail">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="tag"
                  width={18}
                  height={18}
                />
              </div>
              &nbsp;&nbsp;
              <div className="bold">Special Price</div>&nbsp; &nbsp;
              <div>
                Get extra ₹6000 off (price inclusive of cashback/coupon)
              </div>
              &nbsp; &nbsp;
              <div className="terms">T&C</div>
            </div>
            <div className="product-offer-detail">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="tag"
                  width={18}
                  height={18}
                />
              </div>
              &nbsp;&nbsp;
              <div className="bold">Freebie</div>&nbsp; &nbsp;
              <div>
                Flat ₹1000 off on Cleartrip hotels booking along with 300
                supercoins on booking
              </div>
              &nbsp; &nbsp;
              <div className="terms">T&C</div>
            </div>
            <div className="product-offer-detail">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="tag"
                  width={18}
                  height={18}
                />
              </div>
              &nbsp;&nbsp;
              <div className="bold">Freebie</div>&nbsp; &nbsp;
              <div>
                Flat ₹650 off on Cleartrip flights booking along with 300
                supercoins on booking
              </div>
              &nbsp; &nbsp;
              <div className="terms">T&C</div>
            </div>
            <div className="product-offer-detail">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="tag"
                  width={18}
                  height={18}
                />
              </div>
              &nbsp;&nbsp;
              <div>Extra 10% Off On Combo Mobile & Casecover- Mar'24</div>
              &nbsp; &nbsp;
              <div className="terms">T&C</div>
            </div>
            <div className="product-offer-detail">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="tag"
                  width={18}
                  height={18}
                />
              </div>
              &nbsp;&nbsp;
              <div>Extra 10% off on Combo with {brand} - Mar'24</div>
              &nbsp; &nbsp;
              <div className="terms">T&C</div>
            </div>
            <div className="product-offer-detail">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="tag"
                  width={18}
                  height={18}
                />
              </div>
              &nbsp;&nbsp;
              <div className="bold">Freebie</div>&nbsp; &nbsp;
              <div>Spotify Premium - 3M at $119</div>
              &nbsp; &nbsp;
              <div className="terms">T&C</div>
            </div>
            <div className="product-offer-detail">
              <div>
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt="tag"
                  width={18}
                  height={18}
                />
              </div>
              &nbsp;&nbsp;
              <div>Buy for 2000 get ₹500 off your Next Buy</div>
              &nbsp; &nbsp;
              <div className="terms">T&C</div>
            </div>
          </div>
          <div className="product-description-box">
            <div className="product-description-title">Description</div>
            <div className="product-description">
              <div>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
