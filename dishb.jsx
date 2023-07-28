import Card from "./card";
import Tstar from "./tstar";
import Fstar from "./fstar";
import Fhstar from "./fhstar";
//import Homepage from "./pages/homepage";
import "../index.css";

function Dishb({ dtype }) {
  return (
    <div className="main-div">
      <h1 className="Name">{dtype}</h1>
      <div className="parent">
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/23d/de309594df1d137bcbd66111fe91f23d.jpg"
            }
            title="Chicken Lollipop"
            desc="price - ₹249"
          />
          <Fhstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/0c8/40a75e036dc0a9102c5f32b8eef2c0c8.jpg"
            }
            title="Chicken Biryani"
            desc="price - ₹199"
          />
          <Fstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/580/53835da91dc6ae242940900b52744580.jpg?output-format=webp"
            }
            title="Masala Prawn"
            desc="price - ₹279"
          />
          <Fhstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/812/bbd7eaaad14c6a05b4cbd9bae71cc812.jpg"
            }
            title="Mutton Biryani"
            desc="price - ₹299"
          />
          <Tstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/84c/d647121e4b5b0b79aa9621eeaa9f784c.jpg"
            }
            title="Chicken Chowmein"
            desc="price - ₹129"
          />
          <Fstar />
        </div>
      </div>
    </div>
  );
}

export default Dishb;
