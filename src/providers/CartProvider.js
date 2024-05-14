import { createContext, useReducer } from "react";

export const cartContext = createContext(null);
const reducer = (cart, action) => {
  const {
    payload: { product },
  } = action;

  switch (action.type) {
    case "addCart":
      return [...cart, product];

    case "removeCart":
      return cart.filter((value) => value.id !== product.id);
    case "plus":
      return cart.map((item) => {
        if (item.id === product.id) {
          product.qty++;
          return product;
        }

        return item;
      });

    case "minus":
      if (product.qty < 2) {
        return cart.filter((item) => {
          return item.id !== product.id;
        });
      }
      return cart.map((item) => {
        if (item.id === product.id) {
          product.qty--;
          return product;
        }
        return item;
      });

    default:
      return cart;
  }
};
export function CartProvider(props) {
  const [cart, dispatch] = useReducer(reducer, []);
  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </cartContext.Provider>
  );
}
