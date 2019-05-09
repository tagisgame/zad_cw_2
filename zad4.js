// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Operacje wykonywane przez program">
var sum = 0;

while(true){
  //Pobieranie liczby od użytkownika
  num = readlineSync.questionInt("Podaj liczbę: ");

  //Pętla zostaje przerwana, gdy liczba jest zerem
  if(num == 0)
    break;

  //Dodanie do sumy
  sum += num;
}
// </editor-fold>

//Konstruuowanie wiadomości końcowej
  result = "Suma wprowadzonych liczb: " + sum;

//Wyświetlanie wyniku działania
  console.log(result)
