import React, { useState } from "react";
import { shoeArr } from "./dataShoe";
import List from "./List";
import Cart from "./Cart";

export default function ExShoe() {
  // usf
  const [listShoe, setListShoe] = useState(shoeArr);
  const [cart, setCart] = useState([]);
  // state ở đâu thì setState ở đó
  let handleRemoveFromList = (idShe) => {
    console.log("idShe:", idShe);
    let newListShoe = listShoe.filter((shoe) => {
      return shoe.id != idShe;
    });
    // setState => render lại giao diện
    setListShoe(newListShoe);
  };
  let handleAddToCart = (shoe) => {
    // let data = { ...shoe, total: 1 };
    // let newCart = [...cart, data];
    // setCart(newCart);
    // findIndex để biết là đã có trong giỏ hàng chưa
    let cloneCart = [...cart];

    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      // ko tìm thấy
      // th1 : chưa có trong giỏ hàng => thêm vào giỏ hàng
      let data = { ...shoe, total: 1 };
      cloneCart.push(data);
    } else {
      // th2 : đã có trong giỏ hàng => tăng số lượng
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
    // tìm vị trí của sp cần tăng số lượng
    let index = cloneCart.findIndex((item) => item.id == idShoe);
    // cập nhật lại value của object vừa tìm thấy
    cloneCart[index].total++;
    // setState => render lại giao diện
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
