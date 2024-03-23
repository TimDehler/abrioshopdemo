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

  getLagerbestand() {
    return this.lagerbestand;
  }

  getPreis() {
    return this.preis;
  }

  setLagerbestand(lagerbestand) {
    this.lagerbestand = lagerbestand;
  }
}
export default Product;
