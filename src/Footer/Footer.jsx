import React, { useState } from "react";
import "./Footer.css";
import About from "../About/About";
import Chef from "../Chef/Chef";

function Footer() {
  return (
    <div className="main-div">
      <h1>Make a reservation</h1>
      <div className="input1">
        <input type="text" placeholder="FULL NAME" />
        <input type="email" placeholder="EMAIL ADDRESS" />
      </div>
      <div className="mpn">
        <input type="text" placeholder="MESSAGE AND PHONE NUMBER" />
      </div>
      <div>
        <button style={{ padding: "20px" }}>SEND</button>
      </div>
      <div>
        <h4>...or reach out directly</h4>
        <br />
        <br />
        <div style={{ marginTop: "2%" }}>
          <img
            src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/64469209c62285231027f5f5_phone-call.png"
            alt="no img"
          />
          <p>123 . 456 . 7890</p>
        </div>

        <div style={{ margin: "4% 26% 0% 0%" }}>
          <img
            src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/64469288571acecfc6c4759c_black-back-closed-envelope-shape.png"
            alt="no img"
          />
          <p
            style={{
              marginLeft: "36%",
              fontFamily: "Comic Sans MS",
              letterSpacing: "3px",
            }}
          >
            restaurant@flavour.com
          </p>
        </div>
        {/* <hr style={{margin:"8%", border: "0.1% solid black"}}/> */}
        <div
          id="parent-div"
          style={{ backgroundColor: "#dcc390", marginTop: "10%" }}
        >
          <div>
            <h4 style={{ fontFamily: "Mongolian Baiti" }}>Flavour101</h4>
            <p
              style={{
                fontFamily: "Bodoni MT",
                textAlign: "left",
                fontSize: "px",
              }}
            >
              Expert cooking techniques to bring out the best flavors and
              textures in the ingredients
            </p>
          </div>
          <div className="child1">
            <h5 style={{ fontSize: "20px", fontFamily: "Bodoni MT" }}>Home</h5>
            <a href="/">News</a>
            <a href="../About/About">About </a>
            <a href="/">Contact </a>
          </div>
          <div className="child1">
            <h5 style={{ fontSize: "20px", fontFamily: "Bodoni MT" }}>Pages</h5>
            <a href="../Chef/Chef">Chef</a>
            <a href="/">Menu </a>
            <a href="/">Reservation </a>
          </div>
          <div className="child1">
            <h5 style={{ fontSize: "20px", fontFamily: "Bodoni MT" }}>
              Social
            </h5>
            <a href="/">Twitter</a>
            <a href="/"> Linkedin</a>
            <a href="/"> Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
