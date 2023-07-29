import React from "react";
import "./Chef.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Chef() {
  return (
    <div className="main-div2">
      <Navbar />

      <h1
        style={{
          fontFamily: "Futara",
          fontSize: "55px",
          padding: "5% 18% 0% 18%",
        }}
      >
        Ted Nasso, The Architect Of Cuisine
      </h1>

      <img
        src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/6446828f3502ccf0e68c800a_pp.jpg"
        alt="no img"
        style={{ width: "300px", height: "270px" }}
        id="left-img"
      />
      <img
        src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/64466eb8139322ca788d130d_pexels-cottonbro-studio-3298641-2-1.jpg"
        alt="no img"
        style={{ width: "70vh", height: "68vh" }}
      />
      <img
        src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/64425e54c0d78169ffe89508_pexels-cottonbro-studio-3296411-1.jpg"
        alt="no img"
        style={{ width: "300px", height: "270px" }}
        id="right-img"
      />

      <div className="menu-section">
        <p className="big-text-bg">World's Cuisine</p>
        <p id="view-menu">view menu</p>
      </div>

      <div className="chef-container">
        <img
          src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/64467a54fe9062f9d20345b5_pexels-mikhail-nilov-8136892-1-p-800.jpg"
          alt="error"
          id="chefimg1"
        />
        <div className="chef-details">
          <h2 style={{ marginRight: "57%" }}>Isabella</h2>
          <p
            style={{
              marginTop: "-30%",
              marginLeft: "-5%",
              marginRight: "55%",
              textAlign: "left",
              padding: "5% 5% 0% 15%",
              fontFamily: "Segoe Print",
            }}
          >
            Meet Chef Isabella, the culinary genius behind <b>Flavor 101</b>{" "}
            Restaurant. With a flair for innovation and a passion for exploring
            diverse ingredients, Chef Isabella creates a symphony of flavors
            that captivate diners' palates.
          </p>
        </div>
      </div>

      <div className="chef-container">
        <img
          src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/64468291f76452e522d32421_jeff-siepman-z-IxdGQ7lPU-unsplash-1-p-800.jpg"
          alt="error"
          id="chefimg2"
        />
        <div className="chef-details">
          <h2
            style={{
              marginLeft: "70%",
              marginTop: "-44%",
            }}
          >
            Marco
          </h2>
          <p
            style={{
              marginTop: "-30%",
              marginLeft: "45%",
              textAlign: "left",
              padding: "5% 8% 0% 15%",
              fontFamily: "Segoe Print",
            }}
          >
            Meet Chef Marco, A master of fusion cuisine, infusing authentic
            recipes with modern flair, delivering a memorable dining experience.
            Her passion for seasonal produce shines in every dish, taking diners
            on a journey of delightful tastes.
          </p>
        </div>
      </div>

      <div className="chef-container">
        <img
          src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/64467a53472626403d73d585_pexels-ron-lach-8879620-1-p-800.jpg"
          alt="error"
          id="chefimg3"
        />
        <div className="chef-details" style={{ marginTop: "5%" }}>
          <h2 style={{ marginRight: "57%" }}>Alex</h2>
          <p
            style={{
              marginTop: "-30%",
              marginLeft: "-5%",
              marginRight: "55%",
              textAlign: "left",
              padding: "5% 5% 0% 15%",
              fontFamily: "Segoe Print",
            }}
          >
            Meet Chef Alex, a culinary virtuoso with a flair for international
            flavors at <b>Flavor 101</b>. From Asian spices to European finesse,
            each plate is a masterpiece, showcasing his mastery of
            cross-cultural gastronomy.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "50%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Chef;
