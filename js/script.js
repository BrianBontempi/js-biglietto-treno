console.log("JS OK")

// ******* Variabili di base ************

// ! recupero elemento

const totalElement = document.getElementById("final-price");

// ! variabile costo per km

const priceKm = 0.21;

// ! messaggio prezzo finale

const priceMessage = "Il costo del tuo biglietto è: €";

// ! eventuale sconto

let discount = null;

// ********* creiamo la logica dell'esercizio ***********

// ! chiedo età e km da percorrere all'utente

const age = parseInt(prompt(" quanti anni hai?", 30))
const km = parseInt(prompt("Quanti km devi percorrere?", 300))

// ! Calcolo del prezzo biglietto

const standardPrice = km * priceKm;
let finalPrice = standardPrice

// ! stampo in pagina il prezzo del biglietto

totalElement.innerText = priceMessage + finalPrice.toFixed(2)


