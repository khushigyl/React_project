import React, { useState, useEffect } from "react";
import Cardt from "./cardt";
import "./menupage.css";
import { Link } from "react-router-dom";
//import CartPage from "./cart";
function Menupage() {
  const [showfarr, setShowfarr] = useState([]);
  const [showsarr, setShowsarr] = useState([]);
  const [showtarr, setShowtarr] = useState([]);
  const [showfoarr, setShowfoarr] = useState([]);
  const [showfiarr, setShowfiarr] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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
  const addToCart = async (item) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item }),
      });
      const data = await response.json();
      console.log(data);
      // Update the addedItems state
      setAddedItems([...addedItems, item]);
      // Refresh the cart items after adding
      getCartItems();
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [showAddedItems, setShowAddedItems] = useState(false);
  const [addedItemsList, setAddedItemsList] = useState([]);

  const handleShowAddedItems = () => {
    setShowAddedItems(!showAddedItems);
  };

  /*const getCartItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };*/
  const handleDeleteItem = async (item) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/${encodeURIComponent(item.name)}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
      getCartItems(); // Refresh the cart items after deleting
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata1();
    getdata2();
    getdata3();
    getdata4();
    getdata5();
    getCartItems();
  }, [state]);

  return (
    <div>
      <h2>Restaurant</h2>
      <h2>Menu</h2>
      <Link to="/cart">Go to Cart</Link>
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
                onAddToCart={() => addToCart(el.name)}
                isAdded={addedItems.includes(el.name)}
              />
            </div>
          ))}
        {obj.icecream === true &&
          showsarr.map((el) => (
            <div id="child_menu1" key={el.id}>
              <Cardt
                title={el.name}
                imgsrc={el.image}
                body={el.price}
                onAddToCart={() => addToCart(el.name)}
                isAdded={addedItems.includes(el.name)}
              />
            </div>
          ))}
        {obj.sweet === true &&
          showtarr.map((el) => (
            <div id="child_menu1" key={el.id}>
              <Cardt
                title={el.name}
                imgsrc={el.image}
                body={el.price}
                onAddToCart={() => addToCart(el.name)}
                isAdded={addedItems.includes(el.name)}
              />
            </div>
          ))}
        {obj.meals === true &&
          showfoarr.map((el) => (
            <div id="child_menu1" key={el.id}>
              <Cardt
                title={el.name}
                imgsrc={el.image}
                body={el.price}
                onAddToCart={() => addToCart(el.name)}
                isAdded={addedItems.includes(el.name)}
              />
            </div>
          ))}
        {obj.others === true &&
          showfiarr.map((el) => (
            <div id="child_menu1" key={el.id}>
              <Cardt
                title={el.name}
                imgsrc={el.image}
                body={el.price}
                onAddToCart={() => addToCart(el.name)}
                isAdded={addedItems.includes(el.name)}
              />
            </div>
          ))}
      </div>
      {/*<button onClick={handleShowAddedItems}>
        {showAddedItems ? "Hide Added Items" : "Show Added Items"}
      </button>*/}
      {showAddedItems && (
        <div>
          <h2>Added Items</h2>
          <ul>
            {addedItemsList.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <img src={item.image} alt={item.name} />
                <span>{item.price}</span>
                <button onClick={() => handleDeleteItem(item)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menupage;
