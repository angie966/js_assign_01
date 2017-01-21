const myVal = process.argv;
let Arr1=[];
Arr1.push(Number(myVal[2]));
Arr1.push(Number(myVal[3]));
console.log(Arr1);
let a = Number(myVal[2])+ Number(myVal[3]);
if(Number(myVal[2]),Number(myVal[3])<10)
{ console.log(' entered values are less than 10')}
else if(Number(myVal[2]),Number(myVal[3])>10 && Number(myVal[2]),Number(myVal[3])<100)
{
    console.log('entered values are greater than 10 but less than 100')
}
else if(Number(myVal[2]),Number(myVal[3])>100 && Number(myVal[2]),Number(myVal[3])<1000)
{
    console.log('entered values are greater than 100 and less than 1000')
}
else
{
    console.log("entered values are greater than  1000")
}