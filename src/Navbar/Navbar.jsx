import React from "react";
import "./Navbar.css";
// import Home from "../Home/Home";
// import About from "../About/About";
// import Contact from "../Contact/Contact";
// import { Link } from "react-router-dom";
// import imageSrc from "./path/to/logo.png"; // Replace with the correct logo path

function Navbar() {
  return (
    <div className="main_div">
      <div id="child1">
        {/* <Link to={"/Home"}>Home</Link>
        <Link to={"/about"}>ABOUT US</Link>
        <Link to={"/CONTACT"}>CONTACT US</Link> */}
        <a href="/">Home</a>
        <a href="/">ABOUT US</a>
        <a href="/">CONTACT US</a>
      </div>
      <div className="logo">
        <p style={{ marginTop: "10vh" }}>Flavour 101</p>
      </div>
      <div id="child2">
        <a href="/">OUR MENU</a>
        <a href="/">SIGN IN</a>
        <a href="/">SIGN UP</a>
        {/* Add any content for the right side of the navbar here */}
      </div>
    </div>
  );
}

export default Navbar;
