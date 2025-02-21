import React, { useState } from 'react';
import '../css/outfit.css';
const Outfit = () => {
  const [cart, setCart] = useState([]);

  const outfits = [
    { id: 1, name: 'Leather Jacket', price: 150, image: 'leather jacket.jpeg' },
    { id: 2, name: 'Motorcycle Gloves', price: 35, image: 'gloves.jpeg' },
    { id: 3, name: 'Riding Boots', price: 120, image: 'boots.jpeg' },
    { id: 4, name: 'Protective Pants', price: 90, image: 'pant.jpg' },
    { id: 5, name: 'Riding Jacket', price: 180, image: 'riding jacket.jpeg' },
    { id: 6, name: 'Motorcycle Helmet', price: 220, image: 'helmet.jpeg' },
    { id: 7, name: 'Riding Gloves', price: 40, image: 'images.jpegriding gloves.jpeg' },
    { id: 8, name: 'Riding Shoes', price: 100, image: 'riding shoe.jpeg' },
    { id: 9, name: 'Motorcycle Vest', price: 130, image: 'vest.jpeg' },
    { id: 10, name: 'Motorcycle Pants', price: 150, image: 'motor pant.jpeg' },
    { id: 11, name: 'Windbreaker Jacket', price: 110, image: 'windbreaker jack.jpeg' },
    { id: 12, name: 'Riding Armor', price: 250, image: 'Armor.jpeg' },
  ];

  const addToCart = (outfit) => {
    const existingItem = cart.find((item) => item.id === outfit.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === outfit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...outfit, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    setCart([]); // Clear the cart
  };

  return (
    <div className="outfit-page">
      <section className="outfit-section">
        <div className="outfit-content">
          <h1 className="outfit-title">Riding Outfits for Every Adventure</h1>
          <p className="outfit-description">
            Find the best outfits for your riding adventures. Browse and shop our latest collection!
          </p>
        </div>
      </section>

      <section className="outfit-collection">
        <h2 className="section-title">Featured Outfits</h2>
        <div className="outfit-cards">
          {outfits.map((outfit) => (
            <div key={outfit.id} className="outfit-card">
              <img src={outfit.image} alt={outfit.name} />
              <h3 className="outfit-name">{outfit.name}</h3>
              <p className="outfit-price">${outfit.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(outfit)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="cart">
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-items">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">
                  ${item.price} x {item.quantity}
                </p>
                <div className="cart-item-actions">
                  <button
                    className="quantity-btn"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart">No items in your cart</p>
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-total">
            <p className="total-price">Total: ${getTotalPrice()}</p>
            <button className="buy-now-btn" onClick={handleCheckout}>
              Buy Now
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Outfit;
