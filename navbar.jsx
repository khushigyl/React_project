import React from "react";
import "../navbar.css";
import logo from "../image/logo.png";
// Replace with the correct logo path

function Navbar() {
  return (
    <nav className="navbar">
      <div className="main_div">
        <div id="child1">
          <a href="/">HOME</a>
          <a href="/">ABOUT US</a>
          <a href="/">CONTACT US</a>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" id="logo" />
        </div>
        <div id="child2">
          <a href="/">OUR MENU</a>
          <a href="/">SIGN IN</a>
          <a href="/">SIGN UP</a>
          {/* Add any content for the right side of the navbar here */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
