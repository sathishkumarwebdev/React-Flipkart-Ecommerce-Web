import { cartContext } from "../providers/CartProvider";
import { useState } from "react";
export function Cart({ cart, dispatch }) {
  const { title, price, discountPercentage, thumbnail, brand, qty } = cart;

  const discountValue = price * ((100 - discountPercentage) / 100);
  const value = discountValue.toFixed(2);
  console.log("the qty", qty);
  return (
    <div>
      <div className="your-cart-items">
        <div className="your-cart-items-box">
          <div className="cart-thumbnail">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="cart-detail">
            <div className="cart-title">
              <span>
                {brand} &nbsp;
                {title}
              </span>
            </div>
            <div className="retail">
              Seller:NGIVR RETAILS &nbsp;
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" />
            </div>
            <div className="cart-price">
              <span className="cart-price-strike">${price}</span>
              <span className="cart-rate">${value}</span>
              <div className="offer">
                <span className="cart-off">
                  {discountPercentage.toFixed(0)}%off
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-delevery">Delivery by 2 Days</div>
      </div>
      <div className="qty-container">
        <div className="qty-box">
          <button
            onClick={() => {
              dispatch({ type: "minus", payload: { product: cart } });
            }}
          >
            -
          </button>
          <div className="qty-display">{qty}</div>
          <button
            onClick={() => {
              dispatch({ type: "plus", payload: { product: cart } });
            }}
          >
            +
          </button>
        </div>
        <div className="save-for-later">
          <span>SAVE FOR LATER</span>
        </div>
        <div className="remove-cart">
          <span
            onClick={() => {
              dispatch({ type: "removeCart", payload: { product: cart } });
            }}
          >
            REMOVE
          </span>
        </div>
      </div>
    </div>
  );
}
