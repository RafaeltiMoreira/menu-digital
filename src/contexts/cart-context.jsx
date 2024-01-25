import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  function AddItemCart(item) {
    let cartItemsNew = [];
    let findItem = false;

    for (var prod of cartItems) {
      if (prod.id === item.id) {
        item.qtd = prod.qtd + 1;
        findItem = true;
        cartItemsNew.push(item);
      } else {
        cartItemsNew.push(prod);
      }
    }

    if (findItem === false || cartItems.length === 0) {
      cartItemsNew.push(item);
    }
    setCartItems(cartItemsNew);
    CalcTotal(cartItemsNew);
  }

  function RemoveItemCart(id) {
    let cartItemsNew = [];

    for (var prod of cartItems) {
      if (prod.id === id) {
        prod.qtd = prod.qtd - 1;
      }

      cartItemsNew.push(prod);
    }

    cartItemsNew = cartItemsNew.filter(function (item) {
      return item.qtd > 0;
    });

    setCartItems(cartItemsNew);
    CalcTotal(cartItemsNew);
  }

  function CalcTotal(items) {
    let tot = 0;

    for (var item of items) tot = tot + item.preco * item.qtd;
    setTotalCart(tot);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        AddItemCart,
        RemoveItemCart,
        totalCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
