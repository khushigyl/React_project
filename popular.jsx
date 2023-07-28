import React from "react";
//import "../navbar.css";
//import logo from "../image/logo.png";
// Replace with the correct logo path

function Popular() {
  return (
    <>
      <div className="box">
        <a href="/" className="fas fa-heart"></a>
        <img src="./images/pizza.jpg" alt="" />
        <h3>Mushroom Pizza</h3>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <span>Rs150</span>
        <a href="/" className="btn">
          Add to Cart
        </a>
      </div>
    </>
  );
}

export default Popular;
