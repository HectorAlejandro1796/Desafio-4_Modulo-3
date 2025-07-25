import propiedadesAlquiler from "./data/propiedades_alquiler.js";
import pintarCards from "./utilities/pintarCards.js";

const sectionAlquiler = document.querySelector("#alquiler > .row");

pintarCards(sectionAlquiler,propiedadesAlquiler)