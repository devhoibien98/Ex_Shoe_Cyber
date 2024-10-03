import React, { useState } from "react";
import { shoeArr } from "./dataShoe";
import List from "./List";
import Cart from "./Cart";

export default function ExShoe() {
  const [listShoe, setListShoe] = useState(shoeArr);
  const [cart, setCart] = useState([]);

  let handleRemoveFromList = (idShe) => {
    console.log("idShe:", idShe);
    let newListShoe = listShoe.filter((shoe) => {
      return shoe.id != idShe;
    });

    setListShoe(newListShoe);
  };
  let handleAddToCart = (shoe) => {
    let cloneCart = [...cart];

    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      let data = { ...shoe, total: 1 };
      cloneCart.push(data);
    } else {
      cloneCart[index].total++;
    }
    setCart(cloneCart);
  };
  let handleRemoveFromCart = (idShoe) => {
    let newCart = cart.filter((shoe) => shoe.id != idShoe);
    setCart(newCart);
  };
  let handleIncrease = (idShoe) => {
    let cloneCart = [...cart];

    let index = cloneCart.findIndex((item) => item.id == idShoe);

    cloneCart[index].total++;

    setCart(cloneCart);
  };
  return (
    <div className="row align-items-start">
      <List
        dataShoe={listShoe}
        handleRemoveFromList={handleRemoveFromList}
        handleAddToCart={handleAddToCart}
      />
      <Cart
        dataCart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleIncrease={handleIncrease}
      />
    </div>
  );
}
