import Card from "./card";
import Tstar from "./tstar";
import Fstar from "./fstar";
import Fhstar from "./fhstar";
//import Homepage from "./pages/homepage";
import "../index.css";

function Dishd({ dtype }) {
  return (
    <div className="main-div">
      <h1 className="Name">{dtype}</h1>
      <div className="parent">
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/386/d6b032ab731402cbde062f3eef164386.jpg"
            }
            title="Choclate Milkshake"
            desc="price - ₹169"
          />
          <Fhstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/fa9/be2c5279008f27474a82ba2ca7ff3fa9.jpg?output-format=webp"
            }
            title="Punjabi Lassi"
            desc="price - ₹79"
          />
          <Tstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/79d/28ce00688861423b99ac813b0cd6979d.jpg?output-format=webp"
            }
            title="Cold Coffee"
            desc="price - ₹129"
          />
          <Fhstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/789/e2f967c3b36662d213a2ed0b393d4789.jpg?output-format=webp"
            }
            title="Cappuccino"
            desc="price - ₹115"
          />
          <Fstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/538/ba53157392810247e22470c9c3856538.jpg"
            }
            title="Watermelon Mojito"
            desc="price - ₹199"
          />
          <Fstar />
        </div>
      </div>
    </div>
  );
}

export default Dishd;
