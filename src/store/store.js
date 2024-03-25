import create from "zustand";
import { getAllProducts } from "../api/productController";
import { getBasketProducts } from "../api/basketProductController";

export const useProductStore = create((set) => ({
  initialProducts: [],
  products: [],
  isProductsLoaded: false,
  updateProducts: (titel, anzahl) => {
    set((state) => {
      const productIndex = state.products.findIndex(
        (product) => product.getTitel() === titel
      );
      if (productIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[productIndex].setLagerbestand(
          updatedProducts[productIndex].getLagerbestand() - anzahl
        );
        return { products: updatedProducts };
      }
    });
  },
  fetchProducts: async () => {
    try {
      const products = await getAllProducts();
      set({ products, isProductsLoaded: true, initialProducts: products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));

export const useBasketStore = create((set) => ({
  basketProducts: [],
  initialCheckDone: false,
  addBasketProduct: (newBasketProduct) => {
    set((state) => {
      const existingProductIndex = state.basketProducts.findIndex(
        (product) => product.getTitel() === newBasketProduct.getTitel()
      );

      if (existingProductIndex !== -1) {
        const updatedBasketProducts = [...state.basketProducts];
        updatedBasketProducts[existingProductIndex].setAnzahl(
          updatedBasketProducts[existingProductIndex].getAnzahl() +
            newBasketProduct.getAnzahl()
        );
        return { basketProducts: updatedBasketProducts };
      }
      return { basketProducts: [...state.basketProducts, newBasketProduct] };
    });
  },
  deleteBasketProduct: (titel, anzahl) => {
    set((state) => {
      useProductStore.getState().updateProducts(titel, -anzahl);
      return {
        basketProducts: state.basketProducts.filter(
          (basketProduct) => basketProduct.getTitel() !== titel
        ),
      };
    });
  },
  fetchBasketProducts: async () => {
    try {
      const basketProducts = await getBasketProducts();
      set({ basketProducts, initialCheckDone: true });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));

export const useFilterStore = create((set) => ({
  categoryFilter: [],
  setCategoryFilter: (filters) => {
    set(() => ({
      categoryFilter: filters,
    }));
  },
  colorFilter: [],
  setColorFilter: (filters) => {
    set(() => ({
      colorFilter: filters,
    }));
  },
}));

export const useSortingStore = create((set) => ({
  priceSorting: "",
  setPriceSorting: (direction) => {
    set(() => ({
      priceSorting: direction,
    }));
  },
}));

useFilterStore.subscribe(
  ({ categoryFilter, colorFilter }) => {
    const { priceSorting } = useSortingStore.getState();
    const sortedAndFilteredProducts = sortAndFilterProducts(
      categoryFilter,
      colorFilter,
      priceSorting
    );
    useProductStore.setState({ products: sortedAndFilteredProducts });
  },
  (state) => [state.categoryFilter, state.colorFilter]
);

useSortingStore.subscribe(
  ({ priceSorting }) => {
    const { categoryFilter, colorFilter } = useFilterStore.getState();
    const sortedAndFilteredProducts = sortAndFilterProducts(
      categoryFilter,
      colorFilter,
      priceSorting
    );
    useProductStore.setState({ products: sortedAndFilteredProducts });
  },
  (state) => [state.priceSorting, useFilterStore.getState()]
);

const sortAndFilterProducts = (categoryFilter, colorFilter, priceSorting) => {
  const { initialProducts } = useProductStore.getState();
  let filteredProducts = initialProducts;

  if (categoryFilter.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      product.kategorie.some((category) => categoryFilter.includes(category))
    );
  }

  if (colorFilter.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      colorFilter.includes(product.getFarbe())
    );
  }

  console.log(priceSorting);

  if (priceSorting === "up") {
    return [...filteredProducts].sort((a, b) => a.getPreis() - b.getPreis());
  }
  if (priceSorting === "down") {
    return [...filteredProducts].sort((a, b) => b.getPreis() - a.getPreis());
  }
  return filteredProducts;
};
