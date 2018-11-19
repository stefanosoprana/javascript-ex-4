function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

var parola = checkPalindrom(prompt('inserisci la parola'));
console.log(parola);

if (parola == true) {
  document.writeln('la parola è palindroma');
}

else {
  document.writeln('la parola non è palindroma');
}
