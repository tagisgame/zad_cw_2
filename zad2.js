//Final variable
var result = "";

//Input
[,,a,b] = process.argv; //Numbers given by user
i_a = parseInt(a);
i_b = parseInt(b);

//Program
if(i_a < i_b){
  let sumwhile = 0; //Sum for while loop
  let sumdo = 0; //Sum for do...while loop
  let sumfor = 0; //Sum for for loop
  //While loop
  var i = i_a;
  while(i <= i_b){
    sumwhile += i;
    i++
  }
  //Do...while loop
  i = i_a;
  do{
    sumdo += i;
    i++
  } while(i <= i_b);
  //For loop
  for(let i = i_a; i <= i_b; i++)
    sumfor += i;

  result =
  "While: " + sumwhile + "\n" +
  "Do...While: " + sumdo + "\n" +
  "For: " + sumfor;
}

//Print result
console.log(result)
