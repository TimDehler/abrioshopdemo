import Product from "../classes/Product";

export const getProducts = () => {
  return getTestProducts().map(
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

const getTestProducts = () => {
  return [
    {
      titel: "Produkt1",
      farbe: "Rot",
      kategorie: ["A"],
      lagerbestand: "0",
      preis: 10.0,
    },
    {
      titel: "Produkt2",
      farbe: "Blau",
      kategorie: ["A"],
      lagerbestand: "3",
      preis: 8.99,
    },
    {
      titel: "Produkt3",
      farbe: "Blau",
      kategorie: ["A"],
      lagerbestand: "5",
      preis: 8.99,
    },
    {
      titel: "Produkt4",
      farbe: "Rot",
      kategorie: ["A", "B"],
      lagerbestand: "10",
      preis: 9.99,
    },
    {
      titel: "Produkt5",
      farbe: "Grün",
      kategorie: ["B", "C"],
      lagerbestand: "5",
      preis: 12.99,
    },
    {
      titel: "Produkt6",
      farbe: "Rot",
      kategorie: ["A", "B", "C"],
      lagerbestand: "3",
      preis: 11.99,
    },
    {
      titel: "Produkt7",
      farbe: "Grün",
      kategorie: ["A", "C"],
      lagerbestand: "6",
      preis: 10.99,
    },
    {
      titel: "Produkt8",
      farbe: "Grün",
      kategorie: ["B"],
      lagerbestand: "2",
      preis: 10.49,
    },
    {
      titel: "Produkt9",
      farbe: "Blau",
      kategorie: ["C"],
      lagerbestand: "1",
      preis: 9.99,
    },
  ];
};
