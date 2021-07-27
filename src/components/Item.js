import React, { useState } from "react";






function Item({ name, category }) {
  const [isAdded, setAdded] = useState(false);

  function addToCart(){
    console.log("Clicked");
    setAdded(!isAdded);
  }



  const liClass =  (!isAdded ? null : "in-cart")
  console.log("Component Rendered");

// function setClassName(){
//   return (
  return (
    <li className={liClass}> 
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
