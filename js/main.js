'use strict';

// Chiedi all’utente il suo nome, 
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito.
// Infine scrivi sulla pagina e in console
//  nomecognomecolorepreferito89 
// (con i valori inseriti dall’utente) 




// Chiedi all'utente il suo nome

const firstName = prompt('Inserisci il tuo nome');

// Chiedi all'utente il suo cognome

const lastName = prompt('Inserisci il tuo cognome');

// Chiedi all'utente il suo colore preferito

const favColor = prompt('Inserisci il tuo colore preferito');

// Per far apparire in console i valori immessi dall'utente l'uno attaccato all'altro come richiede l'esercizio

const datiUtente = firstName + lastName + favColor + '89';
console.log(datiUtente);

// Per far apparire sulla pagina html i valori immessi dall'utente l'uno attaccato all'altro come richiede l'esercizio

document.querySelector('h1').innerHTML = datiUtente;