import React, { useState } from "react";
import "./cardt.css";
import { useNavigate } from "react-router-dom";
import PaymentPage from "../menu/payementpage";
function Cardt({ title, imgsrc, body }) {
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();
  const handleBuyNow = () => {
    alert(`💰 Your price is ${body}`);
    navigate("../menu/payementpage");
    //alert(`Payment was successful. 🎉`);
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    alert(`🛒 ${title} is added to your cart. 🛍️`);
  };

  const handleDeleteFromCart = () => {
    setIsAdded(false);
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
