import React from "react";
import Product from "../product/Product";
import { useProductStore } from "../../store/store";

function ProductView({ shouldShow, threshold, viewportWidth }) {
  const { products } = useProductStore();

  const filteredProducts = products.filter(
    (product) => product.getLagerbestand() > 0
  );

  return (
    <>
      {viewportWidth < threshold ? (
        <div
          style={{ height: shouldShow ? "61vh" : "76vh" }}
          className="productViewContainer"
        >
          {filteredProducts.map(
            ({ titel, farbe, kategorie, lagerbestand, preis }) => (
              <Product
                titel={titel}
                farbe={farbe}
                kategorie={kategorie}
                lagerbestand={lagerbestand}
                preis={preis}
              />
            )
          )}
        </div>
      ) : (
        <div className="productViewContainer">
          {filteredProducts.map(
            ({ titel, farbe, kategorie, lagerbestand, preis }) => (
              <Product
                titel={titel}
                farbe={farbe}
                kategorie={kategorie}
                lagerbestand={lagerbestand}
                preis={preis}
              />
            )
          )}
        </div>
      )}
    </>
  );
}

export default ProductView;
