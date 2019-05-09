// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var num = readlineSync.questionInt("Podaj liczbę, aby poznać jej dzielniki: ");
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program">
result = "Oto dzielniki liczby " + num + "\n";
//Wyznaczanie dzielników
for(let i = 1; i <= num; i++){
  if(num % i == 0) result += i + ", ";
}
// </editor-fold>

//Wyswietlanie wyniku działania programu
console.log(result)
