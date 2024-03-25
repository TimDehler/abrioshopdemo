import { fetchData, postData } from "../util/fetchData";
import Product from "../classes/Product";

export const getAllProducts = async () => {
  const endpoint = "getAllProducts";
  const products = await fetchData(endpoint);
  return products.map(
    (product) =>
      new Product(
        product.titel,
        product.farbe,
        product.kategorie,
        product.lagerbestand,
        product.preis
      )
  );
};

export const storeProducts = async (data) => {
  const endpoint = "storeProducts";
  const response = await postData(endpoint, data);
  return response;
};
