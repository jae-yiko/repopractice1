
//start with a user dependent choice. print all even numbers in that range

let start= 1;
let end=10;
for (let counter=start; counter<= end; counter++)
{
    if (counter%2==0)//this line checks to see if the counter is even in a true or false statement and in the next line if its true it will show that even number
    {
        console.log(counter)//this should show only even numbers 
    }
}
console.log("these are all the even numbers from " + start + " to " + end);

//----------------------------------------------------------------------------------------------------------------------
/*
//!!!this code is not working because I dont understand how to negative - positive even numbers only

let start= -1;
let end=10;
for (let counter=start; counter<= end; counter++)
{
    if (counter%2 !=1 && counter%2 !=-1)//
    {
        console.log(counter)//
    }
}
console.log("these are all the even numbers from " + start + " to " + end);

*/

//-------------below is while loop------------------------------------------------------------------------
/*let num=1
while(num<=10)
{
    console.log(num);
    num++;
}
*/

let start= 1;
let end=10;
let counter=start;
while(counter<= end) 
{
    if (counter%2==0)//this line checks to see if the counter is even in a true or false statement and in the next line if its true it will show that even number
    {
        console.log(counter)//this should show only even numbers 
    }
    counter++;
}
console.log("these are all the even numbers from " + start + " to " + end);


