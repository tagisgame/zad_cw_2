//Includowanie readline-sync do skryptu
  const readlineSync = require('readline-sync');

//Zmienna finalnie wyświetlana jako wynik działania programu
  var result = "";

//Przygotowanie programu
  var rand = Math.floor(Math.random() * 100);

//Część właściwa programu
  var guess = -1; //strzał gracza
  do{
    guess = readlineSync.questionInt("Podaj swój strzał: ");
    if(guess > rand)
      console.log("Podałeś za dużą wartość");
    else if(guess < rand)
      console.log("Podałeś za małą wartość");
    else
      result = "Gratulacje";
  } while(guess != rand)

//Wyświetlanie wyniku działania
  console.log(result)
