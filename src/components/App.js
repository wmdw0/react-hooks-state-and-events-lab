import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setDarkMode] = useState(false);
  
//   const changeMode = async () => {
//     setDarkMode(!isDarkMode)
// }
  function changeMode(){
    console.log("Clicked");
   setDarkMode(!isDarkMode);
  }

  

  const appClass =  (isDarkMode ? "App dark" : "App light")
  console.log("Component Rendered");

  function setClassName(){
    return (
    <>
      <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>Light Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
    </>
    )
  }


  return (
    <div className={appClass}> { !isDarkMode ? setClassName : "App dark" }
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
