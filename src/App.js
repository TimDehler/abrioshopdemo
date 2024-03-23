import "./App.css";
import Basket from "./components/view/BasketView";
import Header from "./components/view/Header";

import ProductView from "./components/view/ProductView";
import { getProducts } from "./util/TestProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductView products={getProducts()} />
      <Basket />
    </div>
  );
}

export default App;
