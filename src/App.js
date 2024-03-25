import React, { useState, useEffect } from "react";
import "./App.css";
import Basket from "./components/view/BasketView";
import FilterView from "./components/view/FilterView";
import ProductView from "./components/view/ProductView";
import Header from "./components/view/Header";
import { useBasketStore, useProductStore } from "./store/store";
import {
  storeBasketProducts,
  deleteStoredBasket,
} from "./api/basketProductController";
import { getCookie, setCookie } from "./util/cookie";
import { v4 as uuidv4 } from "uuid";

function App() {
  const threshold = 580;
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [shouldShow, setShouldShow] = useState(false);

  const { fetchProducts, isProductsLoaded } = useProductStore();
  const { basketProducts, fetchBasketProducts, initialCheckDone } =
    useBasketStore();

  useEffect(() => {
    if (getCookie("user") === "") setCookie("user", uuidv4());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
      try {
        deleteStoredBasket();
        if (basketProducts.length > 0) storeBasketProducts(basketProducts);
      } catch (error) {
        console.log(error);
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [basketProducts]);

  useEffect(() => {
    if (!isProductsLoaded) fetchProducts();
  }, [fetchProducts, isProductsLoaded]);

  useEffect(() => {
    if (!initialCheckDone) fetchBasketProducts();
  }, [fetchBasketProducts, initialCheckDone]);

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
