import { fetchData, postData } from "../util/fetchData";
import BasketProduct from "../classes/BasketProduct";

export const getBasketProducts = async () => {
  const endpoint = "getBasketProducts";
  const basketProducts = await fetchData(endpoint);
  return basketProducts.map(
    (basketProduct) =>
      new BasketProduct(
        basketProduct.titel,
        basketProduct.farbe,
        basketProduct.kategorie,
        basketProduct.lagerbestand,
        basketProduct.preis,
        basketProduct.anzahl
      )
  );
};

export const storeBasketProducts = async (data) => {
  const endpoint = "storeBasketProducts";
  const response = await postData(endpoint, data);
  console.log(response);
};

export const deleteStoredBasket = async () => {
  const endpoint = "deleteStoredBasket";
  const response = await fetchData(endpoint);
  console.log(response);
};
