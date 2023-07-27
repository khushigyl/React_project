import React from "react";
import image from "../image/resto.jpg";
import "../reserv1.css";
function Reservation() {
  return (
    <>
      <div className="r-container">
        <div className="r-content">
          <div className="heading">
            <h1>Reservation</h1>
          </div>
          <div className="diff-color">
            <div className="loc">
              <div className="loc-heading">
                <h3>Our Location</h3>
              </div>
              <div className="address">
                <p className="time">
                  Rd Number 24, Khar West,Mumbai Maharastra 400050 India
                </p>
              </div>
              <hr />
            </div>
            <div className="image">
              <img src={image} alt="Resturant image" id="photo" />
            </div>
            <div className="timming">
              <div className="day">
                <hr />
                <p className="time">
                  Tuesday to Sunday
                  <br />
                </p>
                <p className="time">
                  From 11.30-16.00
                  <br />
                  From 18.30-22.30
                </p>
                <h3 className="open">Opening Hours</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservation;
