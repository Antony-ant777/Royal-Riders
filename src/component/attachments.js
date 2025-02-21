
// Import required libraries
import React, { useState } from "react";

import '../css/attachement.css';

// Sample data for Royal Enfield parts
const parts = [
  {
    id: 1,
    name: "Royal Enfield Air Filter",
    image: "air filter.webp",
    price: 1200,
    description: "High-quality air filter for enhanced performance."
  },
  {
    id: 2,
    name: "Royal Enfield Handle Grips",
    image: "handlegrip.webp",
    price: 800,
    description: "Comfortable and durable handle grips."
  },
  {
    id: 3,
    name: "Royal Enfield Headlight",
    image: "head light.webp",
    price: 1500,
    description: "Bright and energy-efficient headlight."
  },
  {
    id: 4,
    name: "Royal Enfield Exhaust System",
    image: "exhaust system.jpg",
    price: 3500,
    description: "High-performance exhaust for a smoother ride."
  },
  {
    id: 5,
    name: "Royal Enfield Seat Cover",
    image: "seat cover.webp",
    price: 1000,
    description: "Premium leather seat cover for extra comfort."
  },
  {
    id: 6,
    name: "Royal Enfield Engine Guard",
    image: "enngine guard.webp",
    price: 2500,
    description: "Durable engine guard for added protection."
  },
  {
    id: 7,
    name: "Royal Enfield Rearview Mirrors",
    image: "rear mirror.webp",
    price: 900,
    description: "Stylish and adjustable rearview mirrors."
  },
  {
    id: 8,
    name: "Royal Enfield Foot Pegs",
    image: "footpegs.avif",
    price: 1200,
    description: "Non-slip foot pegs for better grip."
  },
  {
    id: 9,
    name: "Royal Enfield Brake Pads",
    image: "brake pad.jpg",
    price: 1400,
    description: "Reliable and long-lasting brake pads."
  },
  {
    id: 10,
    name: "Royal Enfield Clutch Lever",
    image: "clutch lever.webp",
    price: 1100,
    description: "Ergonomic clutch lever for smooth operation."
  },
  {
    id: 11,
    name: "Royal Enfield Oil Filter",
    image: "oil filter.jpg",
    price: 600,
    description: "Efficient oil filter for cleaner engine oil."
  },
  {
    id: 12,
    name: "Royal Enfield Battery",
    image: "battery.jpg",
    price: 4200,
    description: "High-performance battery for all conditions."
  },
  {
    id: 13,
    name: "Royal Enfield Chain Set",
    image: "chain set.webp",
    price: 2500,
    description: "Durable chain set for smooth transmission."
  },
  {
    id: 14,
    name: "Royal Enfield Tool Kit",
    image: "tool kit.jpeg",
    price: 800,
    description: "Compact and essential tool kit for repairs."
  },
  {
    id: 15,
    name: "Royal Enfield Windshield",
    image: "windsheild.webp",
    price: 3000,
    description: "Clear and sturdy windshield for protection."
  },
  {
    id: 16,
    name: "Royal Enfield Tank Cover",
    image: "tank cover.jpg",
    price: 1500,
    description: "Stylish tank cover for added aesthetics."
  }
];

function Attachments() {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (part) => {
    setCart([...cart, part]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Buy items in the cart
  const buyItems = () => {
    if (cart.length > 0) {
      alert("Thank you for your purchase! Your items will be shipped soon.");
      setCart([]);
    } else {
      alert("Your cart is empty. Add items to proceed.");
    }
  };

  return (
    <div className="Appatta">
      <h1>Attachments</h1>
      <div className="products">
        {parts.map((part) => (
          <div key={part.id} className="product-card">
            <img src={part.image} alt={part.name} className="product-image" />
            <h3>{part.name}</h3>
            <p>{part.description}</p>
            <p><strong>Price:</strong> ₹{part.price}</p>
            <button onClick={() => addToCart(part)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cartee">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="cartnameempty">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3 className="attachitem">{item.name}</h3>
              <p className="attachitem">Price: ₹{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <button className="buy-button" onClick={buyItems}>Buy Now</button>
        )}
      </div>
    </div>
  );
}

export default Attachments;