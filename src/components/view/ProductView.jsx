import React from "react";
import Product from "../product/Product";
import { useProductStore } from "../../store/store";

function ProductView() {
  const { products } = useProductStore();

  const filteredProducts = products.filter(
    (product) => product.getLagerbestand() > 0
  );

  return (
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
  );
}

export default ProductView;
