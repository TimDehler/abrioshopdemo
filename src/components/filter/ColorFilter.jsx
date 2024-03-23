import React, { useEffect, useState } from "react";
import { useFilterStore } from "../../store/store";

function ColorFilter() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const { setColorFilter } = useFilterStore();

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, id]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== id));
    }
  };

  useEffect(() => {
    setColorFilter(selectedFilters);
  }, [selectedFilters, setColorFilter]);

  return (
    <div>
      <h1>Farben</h1>
      <div>
        <label htmlFor="Rot">R</label>
        <input
          id="Rot"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={selectedFilters.includes("Rot")}
        />
      </div>
      <div>
        <label htmlFor="Grün">G</label>
        <input
          id="Grün"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={selectedFilters.includes("Grün")}
        />
      </div>
      <div>
        <label htmlFor="Blau">B</label>
        <input
          id="Blau"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={selectedFilters.includes("Blau")}
        />
      </div>
    </div>
  );
}

export default ColorFilter;
