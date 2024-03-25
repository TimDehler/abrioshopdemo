import {
  fetchUserDependentData,
  postUserDependentData,
} from "../util/fetchData";
import BasketProduct from "../classes/BasketProduct";
import { getCookie } from "../util/cookie";

export const getBasketProducts = async () => {
  const endpoint = "getBasketProducts";
  const basketProducts = await fetchUserDependentData(
    endpoint,
    getCookie("user")
  );
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
  const response = await postUserDependentData(
    endpoint,
    data,
    getCookie("user")
  );
  console.log(response);
};

export const deleteStoredBasket = async () => {
  const endpoint = "deleteStoredBasket";
  const response = await fetchUserDependentData(endpoint, getCookie("user"));
  console.log(response);
};
