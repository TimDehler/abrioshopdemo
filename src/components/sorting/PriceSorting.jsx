import React from "react";
import { useSortingStore } from "../../store/store";

function PriceSorting() {
  const { setPriceSorting } = useSortingStore();

  return (
    <div>
      <h1>Sortieren</h1>
      <button onClick={() => setPriceSorting("up")}>Up</button>
      <button onClick={() => setPriceSorting("down")}>Down</button>
    </div>
  );
}

export default PriceSorting;
