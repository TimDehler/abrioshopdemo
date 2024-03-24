class Product {
  constructor(titel, farbe, kategorie, lagerbestand, preis) {
    this.titel = titel;
    this.farbe = farbe;
    this.kategorie = kategorie;
    this.lagerbestand = lagerbestand;
    this.preis = preis;
  }

  getTitel() {
    return this.titel;
  }

  getFarbe() {
    return this.farbe;
  }

  getKategorie() {
    return this.kategorie;
  }

  getPreis() {
    return this.preis;
  }

  getLagerbestand() {
    return this.lagerbestand;
  }

  setLagerbestand(lagerbestand) {
    this.lagerbestand = lagerbestand;
  }
}
export default Product;
