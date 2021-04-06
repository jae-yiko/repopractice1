//count down
//---------below is for loop------------------------------------------------------------
/*
for (let counter=10; counter>= 1; counter --) //decrement
{
    console.log( counter + " Woof Woof!"); 
}
console.log("  I love you too");



for (let counter=10; counter>= 1; counter -=2) //decrement skip every other number
{
    console.log( counter + " Woof Woof!"); 
}
console.log("  I love you too"); 



var wag = "wag"; //another label
for (let counter=5; counter>= 1; counter --) 
{
    console.log(counter + " " + wag + " Woof Woof!"); 
}
console.log("  I love you too");
*/


//-------------below is while loop------------------------------------------------------------------------
/*let num=1
while(num<=10)
{
    console.log(num);
    num++;
}
*/

let counter=10;
while (counter>= 1)
{ 
    console.log( counter + " Woof Woof!"); 
    counter--; //decrement
}
console.log("  I love you too");

let counter1=10;
while(counter1>= 1) 
{
    console.log( counter1 + " Woof Woof!"); 
    counter1-=2; //decrement skip every other number
}
console.log("  I love you too"); 


var wag = "wag"; //another label
let counter2=5; 
while(counter2>= 1)
{
    console.log(counter2 + " " + wag + " Woof Woof!"); 
    counter2--; 
}
console.log("  I love you too");
