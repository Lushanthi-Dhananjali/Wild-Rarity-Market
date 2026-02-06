import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

export const MarketContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) cart[i] = 0;
  return cart;
};

const MarketContextProvider = (props) => {
   const userId = "guest"; 
const [all_product, setAll_Product] = useState([]);

  const [cartItems, setCartItems] = useState(getDefaultCart());

  

useEffect(() => {
  fetch("http://localhost:4000/allproducts")
  .then((response) => response.json())
  .then((data) => setAll_Product(data));

  if(localStorage.getItem('auth-token')){
    fetch('http://localhost:4000/getcart',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json'
      },
      body:"",
    }).then((response) => response.json())
    .then((data) => setCartItems(data));
  }
}, []);

  // Add item
  const addToCart = async (itemId) => {
    const newCart = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
    setCartItems(newCart);
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/addtocart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  };

  // Remove item (decrement)
  const removeFromCart = async (itemId) => {
    const newCart = { ...cartItems, [itemId]: Math.max(cartItems[itemId] - 1, 0) };
    setCartItems(newCart);

    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  };

  // Delete item completely
  const deleteItemFromCart = async (itemId) => {
    const newCart = { ...cartItems, [itemId]: 0 };
    setCartItems(newCart);
    await syncCart(newCart);
  };

  // Clear entire cart
  const clearCart = async () => {
    setCartItems(getDefaultCart());
    try {
      await axios.delete(`http://localhost:4000/cart/${userId}`);
    } catch (err) {
      console.error("Failed to clear cart", err);
    }
  };

  // Sync cart with backend
  const syncCart = async (cart) => {
    const items = Object.keys(cart)
      .filter(key => cart[key] > 0)
      .map(key => ({ productId: Number(key), quantity: cart[key] }));
    try {
      await axios.post(`http://localhost:4000/cart/${userId}`, { items });
    } catch (err) {
      console.error("Failed to sync cart", err);
    }
  };

  const getTotalCartItems = () =>
    Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      if (cartItems[id] > 0) {
        const item = all_product.find(p => p.id === Number(id));
        total += item.new_price * cartItems[id];
      }
    }
    return total;
  };

  return (
    <MarketContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        deleteItemFromCart,
        clearCart,
        getTotalCartItems,
        getTotalCartAmount,
      }}
    >
      {props.children}
    </MarketContext.Provider>
  );
};

export default MarketContextProvider;
