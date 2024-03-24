import React from "react";
import CategoryFilter from "../filter/CategoryFilter";
import ColorFilter from "../filter/ColorFilter";
import PriceSorting from "../sorting/PriceSorting";

function FilterView({ shouldShow, threshold, viewportWidth }) {
  return (
    <>
      {shouldShow || viewportWidth > threshold ? (
        <div className="filterContainer">
          <CategoryFilter />
          <ColorFilter />
          <PriceSorting />
        </div>
      ) : null}
    </>
  );
}

export default FilterView;
