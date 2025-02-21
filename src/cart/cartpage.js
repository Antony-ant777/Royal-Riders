import React from "react";
import { useCart } from "../CartContext";
import "../css/cart.css";

function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>Price: ₹{item.price}</p>
                <p>
                  Quantity: 
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  {item.quantity}
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Price: ₹{getTotalPrice()}</p>
            <button onClick={clearCart}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
