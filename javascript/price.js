console.log('price');

// input user

const distanceTravel = Math.abs(parseInt(prompt('inserire la distanza in chilometri del tragitto'))); //number | NaN
console.log(`La distanza da percorrere è di ${distanceTravel}Km`);

const agePassenger = Math.abs(parseInt(prompt('inserire età del passeggero'))); //number | NaN
console.log(`L'età del passeggero è ${agePassenger}`);

// const distanceTravelString = prompt('inserire la distanza in chilometri del tragitto'); // string | null
// const distanceTravelNumber = Math.abs(parseInt(distanceTravelString)); // number | NaN
// console.log(distanceTravelString);
// console.log(distanceTravelNumber);

const priceTicket = 0.21 * distanceTravel; //number | NaN
const discount20 = (20 * priceTicket) / 100; //number | NaN
const discount40 = (40 * priceTicket) / 100; //number | NaN

if (!distanceTravel || !agePassenger) {
    alert('Errore: inserire un numero o età valido');
    console.log("Errore: Input non valido.");
} else {
    if (agePassenger < 18) {
        priceTicketJunior = priceTicket - discount20;
        alert(`il prezzo del biglietto è : ${priceTicketJunior.toFixed(2)}€`);
        console.log(`il prezzo del biglietto è : ${priceTicketJunior.toFixed(2)}€`);
    } else if (agePassenger > 65) {
        priceTicketSenior = priceTicket - discount40
        alert(`il prezzo del biglietto è : ${priceTicketSenior.toFixed(2)}€`);
        console.log(`il prezzo del biglietto è : ${priceTicketSenior.toFixed(2)}€`);
    } else {
        alert(`il prezzo del biglietto è : ${priceTicket.toFixed(2)}€`);
        console.log(`il prezzo del biglietto è : ${priceTicket.toFixed(2)}€`);
    }
};




/*
const distanceTravel = parseInt(prompt('inserire la distanza in chilometri del tragitto')); //number | NaN
const agePassenger = parseInt(prompt('inserire età del passeggero'));  //number | NaN
const priceTicket = 0.21 * distanceTravel; //number | NaN
const discount20 = (20 * priceTicket) / 100; //number | NaN
const discount40 = (40 * priceTicket) / 100; //number | NaN

if (agePassenger <= 0 || distanceTravel <= 0 || !agePassenger || !distanceTravel) {
    alert('Errore: inserire un numero o età valido');
    console.log("Errore: Input non valido.");
} else {
    if (agePassenger < 18) {
        priceTicketJunior = priceTicket - discount20;
        alert(`il prezzo del biglietto è : ${priceTicketJunior.toFixed(2)}€`);
        console.log(`il prezzo del biglietto è : ${priceTicketJunior.toFixed(2)}€`);
    } else if (agePassenger > 65) {
        priceTicketSenior = priceTicket - discount40
        alert(`il prezzo del biglietto è : ${priceTicketSenior.toFixed(2)}€`);
        console.log(`il prezzo del biglietto è : ${priceTicketSenior.toFixed(2)}€`);
    } else {
        alert(`il prezzo del biglietto è : ${priceTicket.toFixed(2)}€`);
        console.log(`il prezzo del biglietto è : ${priceTicket.toFixed(2)}€`);
    };
}
*/