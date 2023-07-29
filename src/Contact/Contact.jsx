import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Contact() {
  return (
    <div className="main-div">
      <div >
        <Navbar/> 
      </div>
      
      <h1
        style={{
          fontWeight: "700",
          fontFamily: "Futara",
          fontSize: "55px",
          padding: "5% 18% 0% 18%",
          // marginTop: "5%",
        }}
      >
        Contact Us
      </h1>
      <img
        src="https://uploads-ssl.webflow.com/6437e076d27d2710e933a3c8/643e888ed0e551a7dc69a7c8_pexels-rachel-claire-4577179-2.jpg"
        alt="error"
        style={{ width: "80vh", height: "62vh" }}
      />
      <div id="left">
        <p style={{ fontFamily: "Futara" }}>Our Location</p>
        <p style={{ fontWeight: "500", fontSize: "17px" }}>65 King Street.,</p>
        <p style={{ fontWeight: "500", fontSize: "17px" }}>
          New York, NY 25013 USA
        </p><br />
        <hr style={{ width: "60%", border: "0.5px solid grey" }} />
        
      </div>
      <div id="right">
        <hr style={{ width: "60%", border: "0.5px solid grey" }} />
        <br />
        <p style={{ fontWeight: "500", fontSize: "17px" }}>
          Tuesday to Saturday
        </p>
        <p style={{ fontWeight: "500", fontSize: "17px" }}>From 11.30-16.00</p>
        <p style={{ fontWeight: "500", fontSize: "17px" }}>From 18.30-22.30</p>
        <p style={{ fontFamily: "Futara" }}>Opening Hours</p>
      </div>
      <div style={{marginTop:"30%"}} id="foot">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
