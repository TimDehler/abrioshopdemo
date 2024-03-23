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
        <label htmlFor="A">A</label>
        <input
          id="A"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={selectedFilters.includes("A")}
        />
      </div>
      <div>
        <label htmlFor="B">B</label>
        <input
          id="B"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={selectedFilters.includes("B")}
        />
      </div>
      <div>
        <label htmlFor="C">C</label>
        <input
          id="C"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={selectedFilters.includes("C")}
        />
      </div>
    </div>
  );
}

export default CategoryFilter;
