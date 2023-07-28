import "../index.css";
import Dish from "../components/dish";
import Disha from "../components/disha";
import Dishb from "../components/dishb";
import Dishc from "../components/dishc";
import Dishd from "../components/dishd";
function Menu() {
  return (
    <div className="menu">
      <Dish dtype="Pizza & Burger" />
      <Disha dtype="Veg-Meals" />
      <Dishb dtype="NonVeg-Meals" />
      <Dishc dtype="Deserts" />
      <Dishd dtype="Beverages" />
    </div>
  );
}

export default Menu;
