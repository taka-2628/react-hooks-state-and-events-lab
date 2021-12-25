import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleClick(){
    setIsInCart((isInCart) => {return !isInCart})
  }

  const buttonText = isInCart ? "Add to Cart" : "Remove From Cart"
  const buttonClass = isInCart ? "in-cart" : ""

  return (
    <li className={buttonClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
