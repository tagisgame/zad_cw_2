// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var num = readlineSync.questionInt("Podaj dodatnią liczbę całkowitą: ");
//Walidacja wejścia (liczba musi być dodatnia)
while(num <= 0)
  num = readlineSync.questionInt("Podaj DODATNIĄ! liczbę całkowitą: ");
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program">
let power = 1;

//Potęgowanie dwójki dopóki wynik nie przekroczy wartości podanej przez użytkownika
while(power < num){

  //Konstrukcja wyniku działania
  result += power + ", ";

  //Potęgowanie
  power *= 2;
}
// </editor-fold>

//Wyświetlanie wyniku działania
console.log(result);
