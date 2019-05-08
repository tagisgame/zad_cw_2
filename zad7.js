//Includowanie readline-sync do skryptu
  const readlineSync = require('readline-sync');

//Zmienna finalnie wyświetlana jako wynik działania programu
  var result = "";

//Pobieranie wartości od użytkownika
  var char = readlineSync.keyIn("Podaj znak, który ma być wypełnieniem prostokąta: ");
  var startx = readlineSync.questionInt("Podaj x lewego górnego narożnika: ");
  var starty = readlineSync.questionInt("Podaj y lewego górnego narożnika: ");
  var w = readlineSync.questionInt("Podaj szerokość prostokąta: ");
  var h = readlineSync.questionInt("Podaj wysokość prostokąta: ");

//Operacje wykonywane przez program
  //ustawienie początkowe y
  for(let i = 0; i < starty; i++)
    result += "\n";

  //rysowanie prostokąta
  for(let y = starty; y < starty + h; y++){
    for(let x = 0; x < (startx + w); x++){
      if(x < startx)
        result += " ";
      else
        result += char;
    }
    result += "\n";
  }

//Konstrukcja wyniku działania

//Wyświetlanie wyniku działania
    console.log(result)
