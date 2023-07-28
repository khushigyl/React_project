import React from "react";
import { Routes, Route } from "react-router-dom";
import Menupage from "./menupage";
import CartPage from "./cart";
import PaymentPage from "./paymentpage";
function Allroute() {
  return (
    <Routes>
      <Route path="/" element={<Menupage />} />
      <Route path="/menupage" element={<Menupage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/paymentpage" element={<PaymentPage />} />
    </Routes>
  );
}

export default Allroute;
