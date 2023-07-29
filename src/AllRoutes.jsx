import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
// import Navbar from "./Navbar/Navbar";
import Contact from "./contact/Contact";
import Chef from "./Chef/Chef";
import Footer from "./Footer/Footer";
import About from "./About/About";
import { Menu } from "@chakra-ui/react";

function Allparts() {
  return (
    <Routes>
      {/* <Route path="./Navbar/Navbar" element={<Navbar />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="../About" element={<About />} />
      <Route path="../Contact" element={<Contact />} />
      {/* <Route path="/homepage" element={<Homepage />} /> */}
      {/* <Route path="/signup" element={<SignUpForm />} /> */}
      {/* <Route path="/menu/test" element={<Name />} /> */}
      {/* <Route path="/menu/landingpage" element={<Landpage />} /> */}
      {/* <Route path="/menu/sweet" element={<Sweet />} /> */}
      {/* <Route path="/menu/icecream" element={<Icecream />} /> */}
      {/* <Route path="/menu/meals" element={<Meal />} /> */}
      {/* <Route path="/menu/drinks" element={<Drink />} /> */}
      {/* <Route path="/menu/menupage" element={<Menupage />} /> */}
      {/* <Route path="/menu/payementpage" element={<PaymentPage />} /> */}
    </Routes>
  );
}

export default Allparts;
