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
  //wyznacznie liczby najmniejszej i największej
    //max
    var max = 0;
    for(let i = 0; i < index-1; i++){
      if(nums[i] > max)
        max = nums[i];
    }
    //min
    var min = max;
    for(let i = 0; i < index-1; i++){
      if(nums[i] < min)
        min = nums[i];
    }

  //wyznaczanie sumy i średniej
    //suma
    var sum = 0;
    for(let i = 0; i < index-1; i++)
      sum += nums[i];

    //srednia
    var avg = sum / (index-1);


//Konstrukcja wyniku działania
  result = "Min: " + min + "\n" +
  "Max: " + max + "\n" +
  "Suma: " + sum + "\n" +
  "Średnia: " + avg;

//Wyświetlanie wyniku działania
  console.log(result)
