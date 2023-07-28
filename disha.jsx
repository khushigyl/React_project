import Card from "./card";
import Tstar from "./tstar";
import Fstar from "./fstar";
import Fhstar from "./fhstar";
//import Homepage from "./pages/homepage";
import "../index.css";

function Disha({ dtype }) {
  return (
    <div className="main-div">
      <h1 className="Name">{dtype}</h1>
      <div className="parent">
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/pictures/chains/5/2900085/b643543e2ec4675f3fb12fe188eb1b19_o2_featured_v2.jpg"
            }
            title="Masala Dosa"
            desc="price - ₹250"
          />
          <Fstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/pictures/chains/3/19575243/1c17682e17fa3ea8000b40b6efc20049_o2_featured_v2.jpg"
            }
            title="Veg Thali"
            desc="price - ₹299"
          />
          <Tstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/2c0/1e9d8317673093443c7ed2eb23eb32c0.jpg"
            }
            title="Veg Biryani"
            desc="price - ₹149"
          />
          <Fstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/2ba/cc2d9aae9e69df7dc09960242e2bf2ba.jpg?output-format=webp"
            }
            title="Paneer Tikka Masala"
            desc="price - ₹129"
          />
          <Fhstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/e6b/c5fd6a70997868d469f686014bed6e6b.jpg?output-format=webp"
            }
            title="Chole Bhature"
            desc="price - ₹149"
          />
          <Fhstar />
        </div>
      </div>
    </div>
  );
}

export default Disha;
