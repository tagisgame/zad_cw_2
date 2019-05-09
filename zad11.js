// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var height = readlineSync.questionInt("Podaj wysokość choinki: ");
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program">
//Długość linii gwiazdek
var linewidth = 1;

//Rysowanie choinki
for(let i = 0; i < height; i++){
  //Puste miejsca
  for(let j = 0; j < height - i; j++)
    result += " ";

  //Linia gwiazdek
  for(let j = 0; j < linewidth; j++)
    result += "*";

  //Zwiększenie szerokości linii gwiazdek o 2;
  linewidth += 2;

  result += "\n";
}
// </editor-fold>

//Wyswietlanie wyniku działania programu
console.log(result);
