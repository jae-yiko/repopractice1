/*
fibonacci series
0 and 1 are default values(static)
0 1 1 2 3 5 8 this will be endless but at somepoint you want it to end
    0+1=1 / 1+1=2 / 1+2=3 / 3+5=8
the 3rd number from the series which is 1 is considered the first number of fibonacci
the 4th number from the serieis which is 2 is considered the second number of the fibonacci
*/

let num1=0;
let num2=1;
let next;//place holder

console.log(num1);//default value
console.log(num2);//default value

for (let num3=0; num3<10; num3++)//use a different let name. and do num3<10 not num3<=10 because the total number will be 13 not 12 (dont forget you need the default numbers) 
{
    next=num1+num2;//this will get you the 3rd number
    console.log(next);//3rd number will show
    
    num1=num2;//num1=0 num2=1...in this line num1=1
    num2=next;//num2=1
//now with num1=1 and num2=1 it will go to the loop and add 1+1=2 and so on   
}
console.log("done");