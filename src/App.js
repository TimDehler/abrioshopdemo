import "./App.css";
import Basket from "./components/view/BasketView";
import FilterView from "./components/view/FilterView";
import ProductView from "./components/view/ProductView";
import { getProducts } from "./util/TestProducts";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="pageHeading"> ABRIO SHOP DEMO       </h1>
      </header>
      <FilterView />
      <ProductView products={getProducts()} />
      <Basket />
    </div>
  );
}

export default App;
