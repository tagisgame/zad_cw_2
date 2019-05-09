// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Operacje wykonywane przez program">
//Liczba min, max, suma i średnia
var min = Number.MAX_VALUE;
var max = Number.MIN_VALUE;
var sum = 0;
var avg = 0;
//Liczba liczb w ciągu
var count = 0;

while(true){
  let num = readlineSync.questionInt("Podaj " + (++count) + " liczbę: ")

  //Przerwanie pętli, gdy liczba jest zerem
  if(num == 0)
    break;

  //Sprawdzenie czy liczba jest najmniejsza/największa
  if(num > max)
    max = num;
  else if(num < min)
    min = num;

  //Dodanie do sumy
  sum += num;
}

//Wyznaczenie średniej
avg = sum / (count-1);
// </editor-fold>

//Konstruuowanie wiadomości końcowej
  result = "Min: " + min + "\n" +
  "Max: " + max + "\n" +
  "Suma: " + sum + "\n" +
  "Średnia: " + avg;

//Wyświetlanie wyniku działania
  console.log(result);
