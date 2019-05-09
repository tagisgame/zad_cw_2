// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var a = readlineSync.questionInt("Podaj poczatek zakresu: ");
var b = readlineSync.questionInt("Podaj koniec zakresu: ");

//Walidacja inputów
while(a >= b){
  console.log("Pierwsza liczba musi być mniejsza!")
  var a = readlineSync.questionInt("Podaj poczatek zakresu: ");
  var b = readlineSync.questionInt("Podaj koniec zakresu: ");
}
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program">
//Sumy dla trzech różnych pętli
let sumwhile = 0;
let sumdo = 0;
let sumfor = 0;

//Pętla while
var i = a;
while(i <= b){
  sumwhile += i;
  i++
}

//Pętla do...while
i = a;
do{
  sumdo += i;
  i++;
} while(i <= b);

//Petla for
for(let i = a; i <= b; i++)
  sumfor += i;
// </editor-fold>

//Konstruuowanie wiadomości końcowej
result =
"While: " + sumwhile + "\n" +
"Do...While: " + sumdo + "\n" +
"For: " + sumfor;

//Wyświetlanie wyniku działania
console.log(result);
