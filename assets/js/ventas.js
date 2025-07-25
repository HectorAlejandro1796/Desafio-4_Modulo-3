import propiedadesVenta from "./data/propiedades_venta.js";
import pintarCards from "./utilities/pintarCards.js";

const sectionVenta = document.querySelector("#venta > .row");

pintarCards(sectionVenta,propiedadesVenta)