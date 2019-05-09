// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

//Inputy podawane przez użytkownika
var num = readlineSync.questionInt("Podaj dodatnią liczbę całkowitą: ");
while(num <= 0)
  num = readlineSync.questionInt("Podaj DODATNIĄ liczbę całkowitą: ");

//Operacje wykonywane przez program
for(let i = 1; i <= num; i++){
  if(i%2)
    result += i + "; ";
}

//Wyświetlanie wyniku działania
console.log(result);
