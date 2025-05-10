console.log('price train');
/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const PRICE_FOR_KM = 0.21  //number

// input user

const distanceTravel = Math.abs(parseFloat(prompt('inserire la distanza in chilometri del tragitto'))); //number | NaN
console.log(`La distanza da percorrere è di ${distanceTravel} Km`);

const agePassenger = Math.abs(parseInt(prompt('inserire età del passeggero'))); //number | NaN
console.log(`L'età del passeggero è ${agePassenger}`);

// const distanceTravelString = prompt('inserire la distanza in chilometri del tragitto'); // string | null
// const distanceTravelNumber = Math.abs(parseInt(distanceTravelString)); // number | NaN
// console.log(distanceTravelString);
// console.log(distanceTravelNumber);

const priceTicket = PRICE_FOR_KM * distanceTravel; //number | NaN
const discount20 = (20 * priceTicket) / 100; //number | NaN
const discount40 = (40 * priceTicket) / 100; //number | NaN
priceTicketResult = priceTicket
if (!distanceTravel || !agePassenger) {
    alert('Errore: inserire un numero o età valido');
    console.log("Errore: Input non valido.");
} else {
    if (agePassenger < 18) {
        priceTicketResult = priceTicket - discount20;
    } else if (agePassenger > 65) {
        priceTicketResult = priceTicket - discount40
    } 
};

alert(`il prezzo del biglietto è : ${
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    priceTicketResult,
  )}`);
console.log(`il prezzo del biglietto è : ${
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    priceTicketResult,
  )}`
);








/*
const distanceTravel = parseFloat(prompt('inserire la distanza in chilometri del tragitto')); //number | NaN
const agePassenger = parseInt(prompt('inserire età del passeggero'));  //number | NaN
const priceTicket = PRICE_FOR_KM * distanceTravel; //number | NaN
const discount20 = (20 * priceTicket) / 100; //number | NaN
const discount40 = (40 * priceTicket) / 100; //number | NaN
priceTicketResult = priceTicket

if (agePassenger <= 0 || distanceTravel <= 0 || !agePassenger || !distanceTravel) {
    alert('Errore: inserire un numero o età valido');
    console.log("Errore: Input non valido.");
} else {
    if (agePassenger < 18) {
        priceTicketResult = priceTicket - discount20;
    } else if (agePassenger > 65) {
        priceTicketResult = priceTicket - discount40
    } 
};

alert(`il prezzo del biglietto è : ${
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    priceTicketResult,
  )}`);
console.log(`il prezzo del biglietto è : ${
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    priceTicketResult,
  )}`
);*/