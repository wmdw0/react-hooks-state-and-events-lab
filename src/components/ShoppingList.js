import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [ filter, setFilter ] = useState("All");

  function chooseOption(event){
    console.log("selected");
    setFilter(event.target.value);
    console.log(filter);
    console.log(event.target.value);
  }

  let newItems;
  //  = items.filter(item => item.category === filter);
  if (filter === "All"){
    newItems = items;
  } else {
    newItems = items.filter(item => item.category === filter);
  }
  console.log(newItems)
  // let bigCities = cities.filter(city => city.population > 3000000);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={chooseOption}name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
