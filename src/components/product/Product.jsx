import React, { useState } from "react";
import { getColor } from "../../util/ColorConverter";
import { useBasketStore, useProductStore } from "../../store/store";
import BasketProduct from "../../classes/BasketProduct";

function Product({ titel, farbe, kategorie, lagerbestand, preis }) {
  const [produktAnzahl, setProduktAnzahl] = useState(1);
  const { addBasketProduct } = useBasketStore();
  const { updateProducts } = useProductStore();

  const handleProduktAnzahlChange = (operator) => {
    if (operator === "+") {
      if (produktAnzahl < lagerbestand) setProduktAnzahl(produktAnzahl + 1);
    }
    if (operator === "-") {
      if (produktAnzahl > 1) setProduktAnzahl(produktAnzahl - 1);
    }
  };

  const handleAddToCart = () => {
    addBasketProduct(
      new BasketProduct(
        titel,
        farbe,
        kategorie,
        lagerbestand,
        preis,
        produktAnzahl
      )
    );
    updateProducts(titel, produktAnzahl);
  };

  return (
    <div key={titel} className={"productContainer"}>
      <div
        className="productImage"
        style={{ backgroundColor: getColor(farbe) }}
      >
        <h1>{kategorie}</h1>
      </div>
      <h1>{titel}</h1>
      <div className="productQuantity">
        <h3>Anzahl</h3>
        <div className="productQuantityManipulation">
          <button onClick={() => handleProduktAnzahlChange("-")}>-</button>
          <div className="centered">{produktAnzahl}</div>
          <button onClick={() => handleProduktAnzahlChange("+")}>+</button>
        </div>
      </div>
      <div className="productQuantity">
        <h3>Noch {lagerbestand}x verfügbar</h3>
        <h3>{preis.toString() + "€"}</h3>
      </div>
      <button onClick={() => handleAddToCart()}>Add to Cart</button>
    </div>
  );
}

export default Product;
