import React, { useState } from "react";
import { useSortingStore } from "../../store/store";

function App() {
  const [selectedSort, setSelectedSort] = useState("");
  const { setPriceSorting } = useSortingStore();

  const handleChange = (event) => {
    setSelectedSort(event.target.value);
    setPriceSorting(event.target.value);
  };

  return (
    <div>
      <select
        className="sortSelect"
        value={selectedSort}
        onChange={handleChange}
      >
        <option value="" disabled hidden>
          Sortieren
        </option>

        <option value="up">Niedrigster Preis</option>
        <option value="down">Höchster Preis</option>
      </select>
    </div>
  );
}

export default App;
