//Includowanie readline-sync do skryptu
  const readlineSync = require('readline-sync');

//Zmienna finalnie wyświetlana jako wynik działania programu
  var result = "";

//Pobieranie wartości od użytkownika
  var index = 0; //indeks tablicy
  var nums = []; //tablica wartości podanych przez użytkownika

  //pętla do wprowadzania wartości, przerywa się kiedy wpisana wartość jest zerem
    do{
      nums[index] = readlineSync.questionInt(index == 0 ? "Podaj pierwszą liczbę: " : "Podaj kolejną liczbę: ")
      index++;
    }while(nums[index-1] != 0);

//Operacje wykonywane przez program
  //sumowanie wartości wpisanych przez użytkownika
    var sum = 0;
    for(let i = 0; i < index-1; i++)
      sum += nums[i];

//Konstrukcja wyniku działania
  result = "Suma wprowadzonych liczb: " + sum;

//Wyświetlanie wyniku działania
  console.log(result)
