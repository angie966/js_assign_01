// using process.argv
const myVal = process.argv;

//creating array
let Arr1=[];

// third value 
Arr1.push(myVal[2]);
 
 // console log third value
console.log(Arr1);

// converting the 3rd and 4th value to number
Arr1.push(Number(myVal[2]));
Arr1.push(Number(myVal[3]));

// adding both the values
let a= Number(myVal[3])+ Number(myVal[4]);

//console log the sum
console.log(a);
