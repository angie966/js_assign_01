// using process.argv
const myVal = process.argv;

// creating array
let Arr1=[];

// adding values to array
Arr1.push(Number(myVal[2]));
Arr1.push(Number(myVal[3]));

// console log the array
console.log(Arr1);

let a=[]
// adding the values to create sum
a = Number(myVal[2])+ Number(myVal[3]);

console.log(a);

// checking the values using if-else
if(a < 10)
    
    { console.log(' sum is less than 10');}

else if((a > 10) && (a < 100))

    {
    
    console.log('sum is greater than 10 but less than 100');
    }

else if((a > 100) && (a < 1000))
    
    {
    
    console.log('sum is greater than 100 and less than 1000');
    }

else

    {

    console.log("sum is greater than  1000");

    }