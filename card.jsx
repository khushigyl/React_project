import React from "react";
import "../index.css";
import Button from "./Button";

function Card({ imgsrc, title, desc }) {
  return (
    <div className="card">
      <div className="ph">
        <img src={imgsrc} alt="food" id="food" />
      </div>
      <h1>{title}</h1>
      <div className="des">
        <p>{desc}</p>
        <Button butt="Order Now" />
        <Button butt="Add To Cart" />
      </div>
    </div>
  );
}
export default Card;
