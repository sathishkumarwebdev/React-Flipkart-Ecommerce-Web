export function CartCount({ cart }) {
  const cartQty = cart.reduce((acc, cart) => acc + cart.qty, 0);
  return cartQty;
}
