// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var num = readlineSync.questionInt("Podaj liczbę, aby dowiedzieć się czy jest l. pierwszą: ");

//Walidacja
if(num <= 1)
  num = readlineSync.questionInt("Liczba musi być dodatnia! Podaj dodatnią liczbę: ");
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program">
//Największy podzielnik
var mdiv = 1;

for(let i = 2; i < num; i++){
  if(num % i == 0) mdiv = i;
}

//Konstruuowanie wiadomości końcowej
result = (mdiv != 1) ? "Podana liczba nie jest liczbą pierwszą." : "Podana liczba jest liczbą pierwszą."
// </editor-fold>

//Wyswietlanie wyniku działania programu
console.log(result);
