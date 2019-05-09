// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var num = readlineSync.questionInt("Podaj dowolną liczbę całkowitą: ");
//Sprowadzenie liczby do liczby dodatniej (dla bezpieczeństwa)
num = Math.abs(num);
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program">
//Suma cyfr liczby
var sum = 0;
//Suma i liczba cyfr parzystych
var evensum = 0;
var evencount = 0;
//Suma i liczba cyfr nieparzystych
var oddsum = 0;
var oddcount = 0;

//Pętla wyznaczająca kolejne cyfry liczby
while(true){
  //wyznaczanie cyfry i dodawanie do sumy
  let digit = num % 10;
  sum += digit;

  //Ustalenie, czy dana cyfra jest parzysta
  if(digit % 2 == 0){
    evensum += digit;
    evencount++;
  } else {
    oddsum += digit;
    oddcount++;
  }

  //Podzielenie liczby przez dziesięc
  num = Math.floor(num/10);
  //Przerwanie pętli, kiedy wyznaczyliśmy już wszystkie cyfry
  if(num < 1) break;
}

//Wyliczanie średnich
var evenavg = evensum / evencount;
var oddavg = oddsum / oddcount;
// </editor-fold>

//Konstruowanie wiadomości końcowej
result = "Suma cyfr liczby: " + sum + "\n" +
"Stosunek średniej cyfr parzystych do średniej cyfr nieparzystych\n" +
"(PARZYSTE) " + evenavg + " - " + oddavg + " (NIEPARZYSTE)";

//Wyswietlanie wyniku działania programu
console.log(result)
