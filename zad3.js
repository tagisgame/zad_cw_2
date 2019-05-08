//Final variable
var result = "";

//Input
[,,num] = process.argv;
i_num = parseInt(num);

//Program
if(i_num > 0){

  let power = 1; //Result of 2^n

  //2^n < number given by user
  while(power < i_num){
    result += power + ", ";
    power *= 2;
  }
} else {
  result = "Niepoprawne dane wejściowe (A > 0)."
}

//Print result
console.log(result)
