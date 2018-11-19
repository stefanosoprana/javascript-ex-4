// L’utente sceglie pari o dispari e un numero da
// 1 a 5. Generiamo un numero random (sempre
// da 1 a 5) per il computer e dichiariamo chi ha vinto.

var scelta_utente = prompt('scegli pari o dispari');

function checkIfEven(numero) {

  var risultato = (numero % 2 == 0);

  return risultato;
}

var numero_utente = 4

var cpu = Math.floor(Math.random() * (5 - 1 + 1) + 1);

var somma = cpu + numero_utente
console.log(somma);

var verifica_pari = checkIfEven(somma);
console.log(verifica_pari);

if ((scelta_utente == 'pari') && (somma == true)) {
  console.log('hai scelto pari e hai vinto');
}

else if ((scelta_utente == 'dispari') && (somma == false) ) {
  console.log('hai scelto dispari e hai vinto');
}
