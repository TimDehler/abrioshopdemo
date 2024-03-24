import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (parseInt(lagerbestand) < produktAnzahl)
      setProduktAnzahl(parseInt(lagerbestand));
    if (produktAnzahl === 0 && lagerbestand >= 1) setProduktAnzahl(1);
  }, [setProduktAnzahl, lagerbestand, produktAnzahl]);

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
    <div
      style={{ opacity: parseInt(lagerbestand) === 0 ? 0.2 : 1 }}
      key={titel}
      className={"productContainer"}
    >
      <div
        className="productImage"
        style={{ backgroundColor: getColor(farbe) }}
      >
        <h1>{kategorie}</h1>
      </div>
      <h1 className="productTitle">{titel}</h1>

      <div className="productQuantityManipulation">
        <button
          disabled={parseInt(lagerbestand) === 0 ? true : false}
          className="leftButton"
          onClick={() => handleProduktAnzahlChange("-")}
        >
          -
        </button>
        <div className="quantityBox centered">{produktAnzahl}</div>
        <button
          disabled={parseInt(lagerbestand) === 0 ? true : false}
          className="rightButton"
          onClick={() => handleProduktAnzahlChange("+")}
        >
          +
        </button>
      </div>
      <h3 className="centered">Noch {lagerbestand}x verfügbar</h3>

      <button
        disabled={parseInt(lagerbestand) === 0 ? true : false}
        onClick={() => handleAddToCart()}
        className="addToBasket"
      >
        <h3 className="centered">{preis.toString() + "€"}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Product;
