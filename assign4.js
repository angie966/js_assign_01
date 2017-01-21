const myVal= process.argv;
let Arra=[];
let myMealCost = Arra.push(Number(myVal[2]));
 let myTipPercent = Arra.push(Number(myVal[3])); 
const tipAmount = (Number(myVal[3]) / 100) * Number(myVal[2])


const totalOwing = tipAmount + Number(myVal[2])
const outPut = `your meal was $${Number(myVal[2])} + a ${Number(myVal[3])}% tip = ${totalOwing}`

console.log(outPut)