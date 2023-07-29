import React from "react";
import "./About.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function About() {
  return (
    <div className="main-div">
      <div id="nav">
        <Navbar />
      </div>

      <h1 style={{ fontFamily: "Futara" }}>Our Story, A Culinary Journey</h1>
      <div id="images">
        <img
          src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/643e888748f7e72f7fc15cdd_pexels-valeria-boltneva-1860196-1.jpg"
          alt="no img"
          style={{ width: "300px", height: "270px" }}
          id="left-img"
        />
        <img
          src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/6446828fde094be6a5b280ab_pexels-ivan-samkov-8951244-1.jpg"
          alt="no img"
          style={{ width: "70vh", height: "68vh" }}
        />
        <img
          src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/643d4e3baa4cc576c9d21bd9_pexels-cottonbro-studio-3296391-1-1.jpg"
          alt="no img"
          style={{ width: "300px", height: "270px" }}
          id="right-img"
        />
      </div>

      <div className="menu-section">
        <p className="big-text-bg">Fresh dishes</p>
        <button id="view-menu">view menu</button>
      </div>
      <div className="_1000-px-div">
        <h2>
          From Farm to Table, The <br />
          Sustainable Dining Experience
        </h2>
      </div>
      <img
        src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/643e888a0b52000475034e3a_pexels-morena-vw-5282729-1-p-800.jpg"
        alt="no img"
        style={{ height: "14%", width: "34%", paddingRight: "45%" }}
      />
      <p id="p1">
        Home design, inside and out, carries confidence and energy, so we design
        our houses like we were moving in. More paragraph with something snappy.
      </p>
      <p id="p2">
        {" "}
        we embrace sustainability with every bite. Immersing you in a dining
        experience that feels like home, where nature's bounty and culinary
        excellence unite.
      </p>
      <img
        src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/643e888f427a00fec1beb5ec_pexels-rachel-claire-5491010-1-p-1080.jpg"
        alt="error"
        style={{ height: "20%", width: "35%", paddingLeft: "43%" }}
      />
      <div style={{ marginTop: "20%" }}>
        <Footer />
      </div>
    </div>
  );
}
export default About;
