// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Operacje wykonywane przez program">
//Przygotowanie losowej liczby
var rand = Math.floor(Math.random() * 100);

//Część właściwa programu
while(true){
  let guess = readlineSync.questionInt("Podaj swój strzał: ");
  if(guess > rand)
    console.log("Podałeś za dużą wartość");
  else if(guess < rand)
    console.log("Podałeś za małą wartość");
  else{
    result = "Gratulacje";
    break;
  }
}
// </editor-fold>

//Wyświetlanie wyniku działania
  console.log(result);
