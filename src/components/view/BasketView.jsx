import BasketProduct from "../basket/BasketProduct";
import { useBasketStore } from "../../store/store";
import { useEffect, useState } from "react";

function Basket() {
  const { basketProducts } = useBasketStore();
  const [sum, setSum] = useState(0.0);

  const formatSum = () => {
    return sum.toLocaleString().replace(".", ",");
  };

  useEffect(() => {
    if (basketProducts.length > 0) {
      const totalSum = basketProducts.reduce((accumulator, currentProduct) => {
        return (
          accumulator + currentProduct.getPreis() * currentProduct.getAnzahl()
        );
      }, 0);
      setSum(totalSum);
    }
  }, [basketProducts]);

  useEffect(() => {
    if (basketProducts.length === 0) setSum(0.0);
  }, [basketProducts]);

  return (
    <div className="basketContainer">
      <h1>WARENKORB</h1>
      <div className="basketProducts">
        {basketProducts.map(({ titel, lagerbestand, preis, anzahl }) => (
          <BasketProduct
            titel={titel}
            lagerbestand={lagerbestand}
            anzahl={anzahl}
            preis={preis}
          />
        ))}
      </div>
      <div className="basketSum">
        <h1>Summe {formatSum()}€</h1>
      </div>
    </div>
  );
}

export default Basket;
