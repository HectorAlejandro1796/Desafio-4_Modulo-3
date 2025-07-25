import propiedadesVenta from "./data/propiedades_venta.js";
import propiedadesAlquiler from "./data/propiedades_alquiler.js";
import pintarCards from "./utilities/pintarCards.js";

const sectionVenta = document.querySelector("#venta > .row");
const sectionAlquiler = document.querySelector("#alquiler > .row");

pintarCards(sectionVenta,propiedadesVenta,3)
pintarCards(sectionAlquiler,propiedadesAlquiler,3)