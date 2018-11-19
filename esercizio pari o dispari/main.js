// L’utente sceglie pari o dispari e un numero da
// 1 a 5. Generiamo un numero random (sempre
// da 1 a 5) per il computer e dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari

var scelta_utente = prompt('scegli pari o dispari');
console.log(scelta_utente);
document.getElementById('scelta_utente').innerHTML = 'Hai scelto ' + scelta_utente;

// L'utente sceglie un numero da 1 a 5

var numero_utente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(numero_utente);
document.getElementById('numero_utente').innerHTML = 'Hai scelto il n° ' + numero_utente;

// funzione che indica se un numero è pari o dispari

function checkIfEven(numero) {

  var risultato = (numero % 2 == 0);

  return risultato;
}
// la cpu sceglie un numero random

var cpu = Math.floor(Math.random() * (5 - 1 + 1) + 1);
console.log(cpu);
document.getElementById('numero_cpu').innerHTML = 'Il computer ha scelto il n° ' + cpu;

// viene fatta la somma tra il numero scelto dall'utente e il numero scelto dalla cpu

var somma = cpu + numero_utente
console.log(somma);
document.getElementById('somma').innerHTML = 'Il numero da te scelto sommato a quello del computer fa ' + somma;

// viene verificato se la somma è pari o dispari

var verifica_pari = checkIfEven(somma);
console.log(verifica_pari);

// se la scelta dell'utente e il numero scelto sommato al numero della cpu è vero allora è pari e ho vinto

if ((scelta_utente == 'pari') && (verifica_pari == true)) {
  console.log('hai scelto pari e hai vinto!');
  document.getElementById('soluzione').innerHTML = 'Bravo, il risultato è pari, hai vinto!!';
}

// se la scelta dell'utente e il numero scelto sommato al numero della cpu è falso allora è dispari e ho vinto

else if ((scelta_utente == 'dispari') && (verifica_pari == false) ) {
  console.log('hai scelto dispari e hai vinto!');
  document.getElementById('soluzione').innerHTML = 'Bravo, il risultato è dispari, hai vinto!!';
}

// altrimenti riprova

else {
  console.log('hai perso, riprova!');
  document.getElementById('soluzione').innerHTML = 'Hai perso, Riprova';
}
