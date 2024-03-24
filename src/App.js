import React, { useState, useEffect } from "react";
import "./App.css";
import Basket from "./components/view/BasketView";
import FilterView from "./components/view/FilterView";
import ProductView from "./components/view/ProductView";
import Header from "./components/view/Header";

function App() {
  const threshold = 580;
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header
        viewportWidth={viewportWidth}
        threshold={threshold}
        setShouldShow={setShouldShow}
        shouldShow={shouldShow}
      />
      <FilterView
        shouldShow={shouldShow}
        threshold={threshold}
        viewportWidth={viewportWidth}
      />
      <ProductView
        shouldShow={shouldShow}
        threshold={threshold}
        viewportWidth={viewportWidth}
      />
      <Basket />
    </div>
  );
}

export default App;
