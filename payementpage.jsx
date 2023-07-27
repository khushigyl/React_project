import React, { useState } from "react";
import Menupage from "./menupage";
import { useNavigate } from "react-router-dom";
import "./payment.css";
const PaymentPage = () => {
  const [paymentOption, setPaymentOption] = useState("");
  const [pinNumber, setPinNumber] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();
  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handlePinChange = (event) => {
    setPinNumber(event.target.value);
  };

  const handlePayment = () => {
    if (pinNumber.length === 6) {
      setTimeout(() => {
        setPaymentSuccess(true);
        alert("Payment successful! 🎉💰");
        navigate("../menu/menupage");
      }, 2000);
    } else {
        alert("PIN should be a 6 digit number 🔢");
    }
  };

  return (
    <div>
      <h1>Payment Page 🛍️</h1>
      <div id="pay_child">
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="creditCard"
            checked={paymentOption === "creditCard"}
            onChange={handlePaymentOptionChange}
          />
          Credit Card 💳
        </label>
        <label>
          <input
            type="radio"
            name="paymentOption"
            value="phone pay"
            checked={paymentOption === "phone pay"}
            onChange={handlePaymentOptionChange}
          />
          Phone Pay 📱
        </label>
      </div>
      {paymentOption && (
        <div>
          <label>
            Enter PIN 🔐:
            <input
              type="password"
              value={pinNumber}
              onChange={handlePinChange}
            />
          </label>
        </div>
      )}
      <button onClick={handlePayment} disabled={!paymentOption || !pinNumber}>
        Pay Now 💸
      </button>
    </div>
  );
};

export default PaymentPage;
