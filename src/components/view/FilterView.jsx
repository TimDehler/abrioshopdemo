import React from "react";
import CategoryFilter from "../filter/CategoryFilter";
import ColorFilter from "../filter/ColorFilter";
import PriceSorting from "../sorting/PriceSorting";

function FilterView() {
  return (
    <div className="filterContainer">
      <CategoryFilter />
      <ColorFilter />
      <PriceSorting />
    </div>
  );
}

export default FilterView;
