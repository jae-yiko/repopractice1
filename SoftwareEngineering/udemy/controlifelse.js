/* scenario:
checks whether a person is allowed to start taking a driver's license or not
if person is allowed then it will print that into the console 
if not it will print how many years left until the person can start taking the drivers license 
*/

/*
age: 20
check if age is >= age 18
*/
//------my way of solving this problem---------------------------------------------------------------------------
const age= 20;
const allowed= 18;
const yearsLeft= allowed-age;

if (age >= allowed)
{
    console.log(`yay I can take the drivers license test because I'm ${age}`);
}
else
{
    console.log(`sorry, ${yearsLeft} years before you can drive young one`);
}
//------may way 2---------------------------------------------------------------------------
const age1= 15;
const ofAge= age1 >=18;
const yearsLeft1= 18-age1;

if (ofAge)
{
    console.log(`yay I can take the drivers license test because I'm ${age1}`);
}
else
{
    console.log(`sorry, ${yearsLeft1} years before you can drive young one`);
}

//------udemy---------------------------------------------------------------------------
const age2= 2;

if (age2 >=18)
{
    console.log(`yay I can take the drivers license test because I'm ${age2}`);
}
else
{
    console.log(`sorry, ${18-age2} years before you can drive young one`);
}