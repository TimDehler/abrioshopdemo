import React from "react";
import CategoryFilter from "../filter/CategoryFilter";
import ColorFilter from "../filter/ColorFilter";
import PriceSorting from "../sorting/PriceSorting";

function Header() {
  return (
    <div className="headerContainer">
      <h1>Produkt</h1>
      <CategoryFilter />
      <ColorFilter />
      <PriceSorting />
    </div>
  );
}

export default Header;
