// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var inputstr = readlineSync.question("Podaj kwote w formacie <zł> [SPACJA] <gr>: ");
//Wyznaczanie wartości ze stringa
var input = inputstr.split(" ");
var zl = +input[0];
var gr = +input[1];
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program">
//Kwota w groszach
var amount_gr = zl * 100 + gr;
//Dostępne nominały: 5zł, 2zł, 1zł, 50gr, 20gr, 10gr, 5gr, 2gr, 1gr

//Dla 5zl
var zl5_count = Math.floor(amount_gr/500);
amount_gr -= zl5_count * 500;
//Dla 2zl
var zl2_count = Math.floor(amount_gr/200);
amount_gr -= zl2_count * 200;
//Dla 1zl
var zl1_count = Math.floor(amount_gr/100);
amount_gr -= zl1_count * 100;
//Dla 50gr
var gr50_count = Math.floor(amount_gr/50);
amount_gr -= gr50_count * 50;
//Dla 20gr
var gr20_count = Math.floor(amount_gr/20);
amount_gr -= gr20_count * 20;
//Dla 10gr
var gr10_count = Math.floor(amount_gr/10);
amount_gr -= gr10_count * 10;
//Dla 5gr
var gr5_count = Math.floor(amount_gr/5);
amount_gr -= gr5_count * 5;
//Dla 2gr
var gr2_count = Math.floor(amount_gr/2);
amount_gr -= gr5_count * 2;
//Dla 1gr
var gr1_count = Math.floor(amount_gr/1);
amount_gr -= gr5_count * 1;
// </editor-fold>

// <editor-fold desc="Konstruowanie wiadomości końcowej">
if(zl5_count > 0) result+= zl5_count + " x 5zł\n";
if(zl2_count > 0) result+= zl2_count + " x 2zł\n";
if(zl1_count > 0) result+= zl1_count + " x 1zł\n";
if(gr50_count > 0) result+= gr50_count + " x 50gr\n";
if(gr20_count > 0) result+= gr20_count + " x 20gr\n";
if(gr10_count > 0) result+= gr10_count + " x 10gr\n";
if(gr5_count > 0) result+= gr5_count + " x 5gr\n";
if(gr2_count > 0) result+= gr2_count + " x 2gr\n";
if(gr1_count > 0) result+= gr1_count + " x 1gr\n";
// </editor-fold>

//Wyswietlanie wyniku działania programu
console.log(result);
