import Card from "./card";
//import Tstar from "./components/tstar";
import Fstar from "./fstar";
import Fhstar from "./fhstar";
import "../index.css";

function Dishc({ dtype }) {
  return (
    <div className="main-div">
      <h1 className="Name">{dtype}</h1>
      <div className="parent">
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/f02/becac21211708770423b29ec83881f02.jpg"
            }
            title="Dark chocolate Truffle Pastry"
            desc="price - ₹129"
          />
          <Fhstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/a5c/b675383c1d093f6f3822a1c6351c5a5c.jpg"
            }
            title="Oreo Cookie Icecream"
            desc="price - ₹149"
          />
          <Fhstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/41a/bfc1dcfc3fcb8601fcffe0c281e0841a.jpg?output-format=webp"
            }
            title="Rasgulla [10 Pieces]"
            desc="price - ₹169"
          />
          <Fstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/pictures/2/19896322/d897faf49b1c01c8ed1ef843c5cdc208_o2_featured_v2.jpg"
            }
            title="Choclate Icecream"
            desc="price - ₹129"
          />
          <Fhstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/0f1/7310f98704b20f42399d926b5fa510f1.jpg"
            }
            title="Kesaria Gulab Jamun (2pc)"
            desc="price - ₹120"
          />
          <Fstar />
        </div>
      </div>
    </div>
  );
}

export default Dishc;
