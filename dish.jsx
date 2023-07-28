import Card from "./card";
import Tstar from "./tstar";
import Fstar from "./fstar";
import Fhstar from "./fhstar";
import "../index.css";

function Dish({ dtype }) {
  return (
    <div className="main-div">
      <h1 className="Name">{dtype}</h1>
      <div className="parent">
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/pictures/chains/1/2900231/a0c3bcc09b1448a7138beda386f8db21.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            }
            title="Veg Pizza"
            desc="price - ₹250"
          />
          <Fstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/cf8/080a43dab6eb708f3e8d3df77c85acf8.jpg"
            }
            title="Chicken Burger"
            desc="price - ₹199"
          />
          <Fstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/205/279c8caf25ec4e6d96811eb153922205.jpg"
            }
            title="Crispy Veg Burger"
            desc="price - ₹189"
          />
          <Tstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/041/f20454653478601fd54e8806f24c9041.png"
            }
            title="Margherita Pizza"
            desc="price - ₹129"
          />
          <Fstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/b3c/c375e9a628bc7110e06a2b379c0a8b3c.jpg"
            }
            title="Chicken Pizza"
            desc="price - ₹269"
          />
          <Fstar />
        </div>
        <div className="boxx">
          <Card
            imgsrc={
              "https://b.zmtcdn.com/data/dish_photos/5c8/012cb485f6f858c6e306f6494b0f35c8.jpg"
            }
            title="SandWich"
            desc="price - ₹150"
          />
          <Fhstar />
        </div>
      </div>
    </div>
  );
}

export default Dish;
