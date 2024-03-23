import React from "react";
import { useBasketStore } from "../../store/store";

function BasketProduct({ titel, lagerbestand, anzahl }) {
  const { deleteBasketProduct } = useBasketStore();

  return (
    <div className="basketProductContainer">
      <h2>{titel}</h2>
      <h2>{anzahl}x</h2>
      <button onClick={() => deleteBasketProduct(titel, anzahl)}>X</button>
    </div>
  );
}

export default BasketProduct;
