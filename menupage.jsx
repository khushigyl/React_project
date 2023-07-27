import React from "react";
import { useState, useEffect } from "react";
import Cardt from "../signinup/cardt";
import "./menupage.css";
import food1 from "../images/food1.jpg";
import { useNavigate } from "react-router-dom";
function Menupage() {
  const [showfarr, setShowfarr] = useState([]);
  const [showsarr, setShowsarr] = useState([]);
  const [showtarr, setShowtarr] = useState([]);
  const [showfoarr, setShowfoarr] = useState([]);
  const [showfiarr, setShowfiarr] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [obj, setObj] = useState({
    drinks: false,
    icecream: false,
    sweet: false,
    meals: false,
    others: false,
  });
  const button = ["drinks", "icecream", "sweet", "meals", "others"];
  const getdata1 = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Dhanada-Panda/data_test/drinks",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShowfarr(data);
      } else {
        const err = await res.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getdata2 = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Dhanada-Panda/data_test/icecream",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShowsarr(data);
      } else {
        const err = await res.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getdata3 = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Dhanada-Panda/data_test/sweet",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShowtarr(data);
      } else {
        const err = await res.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getdata4 = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Dhanada-Panda/data_test/meal",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShowfoarr(data);
      } else {
        const err = await res.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getdata5 = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Dhanada-Panda/data_test/others",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShowfiarr(data);
      } else {
        const err = await res.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleshow = (el) => {
    const objkeys = Object.keys(obj);
    const com1 = objkeys.filter((item) => !item.includes(el));
    const com2 = objkeys.filter((item) => item.includes(el));
    com1.map((ele) => {
      obj[ele] = false;
    });
    com2.map((ele) => {
      obj[ele] = true;
    });
    setObj(obj);
    setState(!state);
  };
  const handleAddToCart = (item) => {
    if (!addedItems.includes(item)) {
      setAddedItems([...addedItems, item]);
      alert(`🛒 ${item} is added to your cart. 🛍️`);
    } else {
      alert(`🛒 ${item} is already in your cart.`);
    }
  };
  useEffect(() => {
    getdata1();
    getdata2();
    getdata3();
    getdata4();
    getdata5();
  }, [state]);

  return (
    <div>
      <h2>Restaurant</h2>
      <h2>Menu</h2>
      {button.map((el) => (
        <button id="part_button" key={el} onClick={() => handleshow(el)}>
          {el}
        </button>
      ))}
      <div id="parent_menu">
        {obj.drinks === true &&
          showfarr.map((el) => (
            <div id="child_menu1" key={el.id}>
              <Cardt
                title={el.name}
                imgsrc={el.image}
                body={el.price}
                onAddToCart={() => handleAddToCart(el.name)}
                isAdded={addedItems.includes(el.name)}
              />
            </div>
          ))}
        {obj.icecream === true &&
          showsarr.map((el) => (
            <div id="child_menu2" key={el.id}>
              <Cardt
                title={el.name}
                imgsrc={el.image}
                body={el.price}
                onAddToCart={() => handleAddToCart(el.name)}
                isAdded={addedItems.includes(el.name)}
              />
            </div>
          ))}
        {obj.sweet === true &&
          showtarr.map((el) => (
            <div id="child_menu3" key={el.id}>
              <Cardt
                title={el.name}
                imgsrc={el.image}
                body={el.price}
                onAddToCart={() => handleAddToCart(el.name)}
                isAdded={addedItems.includes(el.name)}
              />
            </div>
          ))}
        {obj.meals === true &&
          showfoarr.map((el) => (
            <div id="child_menu4" key={el.id}>
              <Cardt
                title={el.name}
                imgsrc={el.image}
                body={el.price}
                onAddToCart={() => handleAddToCart(el.name)}
                isAdded={addedItems.includes(el.name)}
              />
            </div>
          ))}
        {obj.others === true &&
          showfiarr.map((el) => (
            <div id="child_menu5" key={el.id}>
              <Cardt
                title={el.name}
                imgsrc={el.image}
                body={el.price}
                onAddToCart={() => handleAddToCart(el.name)}
                isAdded={addedItems.includes(el.name)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Menupage;
