//Final variable
var result = "";

//Input
[,,num] = process.argv; //Number given by user

//Program
for(let i = 1; i <= num; i++){
  if(i%2)
    result += i + "; ";
}

//Print result
console.log(result)
