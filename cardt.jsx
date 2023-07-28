import React, { useState } from "react";
import "./cardt.css";
import { useNavigate } from "react-router-dom";
import PaymentPage from "./paymentpage";
function Cardt({ title, imgsrc, body, onAddToCart, isAdded }) {
  // Use only the `isAdded` prop, not the `isAdded` state
  // const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();
  const handleBuyNow = () => {
    alert(`💰 Your price is ${body}`);
    navigate("./paymentpage");
  };

  const handleAddToCart = () => {
    // Call the `onAddToCart` prop to add the item to the cart in the parent component (Menupage)
    onAddToCart(title);
    alert(`🛒 ${title} is added to your cart. 🛍️`);
  };

  const handleDeleteFromCart = () => {
    // Call the `onAddToCart` prop with an empty string to remove the item from the cart in the parent component (Menupage)
    onAddToCart("");
    alert(`🗑️ ${title} is removed from your cart.`);
  };

  return (
    <div className="cardt-container">
      <img src={imgsrc} alt={title} />
      <div className="cardt-content">
        <h2>{title}</h2>
        <p>Price: {body}</p>
        <div className="cardt-buttons">
          {!isAdded ? (
            <button onClick={handleAddToCart}>Add</button>
          ) : (
            <button onClick={handleDeleteFromCart}>Delete</button>
          )}
          {!isAdded && <button onClick={handleBuyNow}>Buy Now</button>}
        </div>
      </div>
    </div>
  );
}

export default Cardt;
