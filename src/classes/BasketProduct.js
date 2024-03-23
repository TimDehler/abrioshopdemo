import Product from "./Product";

class BasketProduct extends Product {
  constructor(titel, farbe, kategorie, lagerbestand, preis, anzahl) {
    super(titel, farbe, kategorie, lagerbestand, preis);
    this.anzahl = anzahl;
  }

  getAnzahl() {
    return this.anzahl;
  }

  setAnzahl(anzahl) {
    this.anzahl = anzahl;
  }
}

export default BasketProduct;
