import React, { useEffect, useState } from "react";
import { useFilterStore } from "../../store/store";

function CategoryFilter() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const { setCategoryFilter } = useFilterStore();

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, id]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== id));
    }
  };

  useEffect(() => {
    setCategoryFilter(selectedFilters);
  }, [selectedFilters, setCategoryFilter]);

  return (
    <div>
      <h1>Kategorie</h1>
      <div>
        <input
          id="A"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={selectedFilters.includes("A")}
        />
        <label htmlFor="A">A</label>
      </div>
      <div>
        <input
          id="B"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={selectedFilters.includes("B")}
        />
        <label htmlFor="B">B</label>
      </div>
      <div>
        <input
          id="C"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={selectedFilters.includes("C")}
        />
        <label htmlFor="C">C</label>
      </div>
    </div>
  );
}

export default CategoryFilter;
