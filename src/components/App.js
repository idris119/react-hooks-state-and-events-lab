
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [onToggle, setOnToggle] = useState(false)
  const appClass = onToggle ? "App dark" : "App light"
  function handleClick() {
    if (onToggle === false) {
      setOnToggle(true)
    }else {
      setOnToggle(false)
    }
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;