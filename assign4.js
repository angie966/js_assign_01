// tip calculator program
const myVal= process.argv;

let Arra=[];

// passing mealcost and tip-pecent from command line
let myMealCost = Number(myVal[2]);
let myTipPercent = Number(myVal[3]); 


const tipAmount = (myTipPercent / 100) * myMealCost;

const totalOwing = tipAmount + myMealCost;

const outPut = `your meal was $${myMealCost} + a ${myTipPercent}% tip = ${totalOwing}`

// console the information
console.log(outPut)