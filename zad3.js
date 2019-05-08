//Includowanie readline-sync do skryptu
  const readlineSync = require('readline-sync');

//Zmienna finalnie wyświetlana jako wynik działania programu
  var result = "";

//Pobieranie wartości od użytkownika
  num = readlineSync.questionInt("Podaj dodatnią liczbę całkowitą: ");
  //Walidacja wejścia (liczba musi być dodatnia)
  while(num <= 0)
    num = readlineSync.questionInt("Podaj DODATNIĄ! liczbę całkowitą: ");

//Operacje wykonywane przez program
  let power = 1; //wynik potęgowania dwójki

  //potęgowanie dwójki dopóki wynik nie przekroczy wartości podanej przez użytkownika
    while(power < num){
      //Konstrukcja wyniku działania
        result += power + ", ";
      power *= 2;
    }

//Wyświetlanie wyniku działania
console.log(result)
