console.log('price');

// chiedere utente numero di chilometri e salvare variabile
// chiedere eta del passeggero e salvare variabile

// calcolare prezzo biglietto
//  prezzo base 0.21 per i chilometri
//  calcolare sconto del 20
//  calcolare sconto del 40
//  se eta minore di 18-
//   - stampo il prezzo scontato del 20
//  se eta superiore di 65
//     - stampo il prezzo scontato del 40
//   altrimenti stampo prezzo normale
//   output in forma decimale fino hai centesimi

// input user
const distanceTravel = Math.abs(parseInt(prompt('inserire la distanza in chilometri del tragitto'))); //number | NaN
console.log(distanceTravel, typeof distanceTravel);
// const distanceTravelString = prompt('inserire la distanza in chilometri del tragitto'); // string | null
// const distanceTravelNumber = Math.abs(parseInt(distanceTravelString)); // number | NaN
// console.log(distanceTravelString, typeof distanceTravelString);
// console.log(distanceTravelNumber, typeof distanceTravelNumber);

if (!distanceTravel) {
    alert('inserire un numero per calcolare il prezzo del biglietto')
};

const agePassenger = Math.abs(parseInt(prompt('inserire età del passeggero'))); //number | NaN
console.log(agePassenger, typeof agePassenger);

if (!agePassenger) {
    alert('inserire un numero per calcolare il prezzo del biglietto')
};

// price ticket
const priceTicket = 0.21 * distanceTravel; //number | NaN
// console.log(priceTicket, typeof priceTicket);

const discount20 = (20 * priceTicket) / 100; //number | NaN
const discount40 = (40 * priceTicket) / 100; //number | NaN

if (agePassenger < 18) {
    priceTicketJunior = priceTicket - discount20
    console.log(priceTicketJunior.toFixed(2))
} else if (agePassenger > 65) {
    priceTicketSenior = priceTicket - discount40
    console.log(priceTicketSenior.toFixed(2))
} else {10
    console.log(priceTicket.toFixed(2))
}