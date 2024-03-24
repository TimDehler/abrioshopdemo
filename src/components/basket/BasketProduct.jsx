import React from "react";
import { useBasketStore } from "../../store/store";

function BasketProduct({ titel, anzahl, preis }) {
  const { deleteBasketProduct } = useBasketStore();

  return (
    <div className="basketProductContainer">
      <h2>{titel}</h2>
      <h2>{anzahl}x</h2>
      <h2>{preis}€</h2>
      <svg
        onClick={() => deleteBasketProduct(titel, anzahl)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="deleteButton"
      >
        <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
      </svg>
    </div>
  );
}

export default BasketProduct;
