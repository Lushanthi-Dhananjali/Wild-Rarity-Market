import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const {
    cartItems,
    all_product,
    addToCart,
    removeFromCart,
    deleteItemFromCart,
    clearCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const cartHasItems = Object.values(cartItems).some(qty => qty > 0);

  if (!cartHasItems) return <div className="cart-empty">Your cart is empty!</div>;

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {all_product.map(product => {
        const quantity = cartItems[product.id];
        if (quantity > 0) {
          return (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div className="cart-item-info">
                <h2>{product.name}</h2>
                <p>Price: ${product.new_price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => removeFromCart(product.id)}> - </button>
                <button onClick={() => addToCart(product.id)}> + </button>
                <button onClick={() => deleteItemFromCart(product.id)}>Remove</button>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cart-total">
        <h2>Total Amount: ${getTotalCartAmount()}</h2>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartItems;
