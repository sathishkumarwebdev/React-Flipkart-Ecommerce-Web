import { CartCount } from "../components/CartCount";
export function CartPrice({ cart }) {
  const totalPrice = cart
    .reduce((acc, cart) => acc + cart.qty * cart.price, 0)
    .toFixed(2);
  // const totalPercentage=cart.reduce((acc, cart) => acc + cart.discountPercentage, 0);
  const afterDiscountPrice = cart
    .reduce(
      (acc, cart) => acc + cart.price * ((100 - cart.discountPercentage) / 100),
      0
    )
    .toFixed(2);

  const discountedAmt = (totalPrice - afterDiscountPrice).toFixed(2);

  // const discountValue = totalPrice * ((100 - totalPercentage) / 100);
  // const value = discountValue.toFixed(2);
  // console.log(value);
  // console.log(cart);

  return (
    <>
      <div className="cart-price-box">
        <div>
          price(
          <CartCount cart={cart} /> items)
        </div>
        <div>${totalPrice}</div>
      </div>
      <div className="cart-price-box">
        <div>Discount</div>
        <div className="green-text">- ${discountedAmt}</div>
      </div>
      <div className="cart-price-box">
        <div>Delevery</div>
        <div>
          <strike>$40</strike> <span className="green-text">Free</span>
        </div>
      </div>

      <div className="cart-price-box-dot">
        <div className="bold-text">Total</div>
        <div className="bold-text">${afterDiscountPrice}</div>
      </div>

      <div>
        <div className="green-text bold-text">
          You will save ${discountedAmt} on this order
        </div>
      </div>
    </>
  );
}
