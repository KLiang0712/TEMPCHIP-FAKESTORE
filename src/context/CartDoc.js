import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

/* states for cart, item amount, & total price */
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });
  console.log(cart); 

  /*update item amount */ 
  useEffect(() => 
  { if (cart) 
  { const amount = cart.reduce((accumulator, currentItem) => 
    { return accumulator + currentItem.amount; }, 0);
      setItemAmount(amount);
  }}, [cart]);
  

  /* add to cart */
  const addItem = (product, id) => {
    console.log(product); 
    console.log(`item ${product.title} added to cart`); 
    const newItem = { ...product, amount: 1 };

    /* check if the item is already in the cart */
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    
    /* if cart item is already in cart */
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } 
        else 
        { 
          return item;
        }
    });
      setCart(newCart);
    } 
    else { setCart([...cart, newItem]); }
  };

  /* remove from cart */ 
  const removeItem = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  /* clear cart */
  const clearCart = () => {
    setCart([]);
  };

  /* increase amount */
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addItem(cartItem, id);
  };

  /* decrease amount */
  const decreaseAmount = (id) => 
  {
    const cartItem = cart.find(item => item.id === id);
  if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeItem(id);
    }
  };

  return (
    <CartContext.Provider
      value={{cart,
        addItem,
        removeItem,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,}}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;