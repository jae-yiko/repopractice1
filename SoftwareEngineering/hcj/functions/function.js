/*
function printMessage()
{
    return 12+10;
}

function findProduct(2,2)
{
    return a;
}

function findSum(4,1)
{
    return b;
}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
*/
//----even and odd-----------------------------------------------------------
let num1=[1,2,3,4,5];
function even(array)//x is an element its like a placeholder
{
    let i;//index
    let num=[];//empty container
    for(i=0; i<array.length; i++)//this is what we want to show
    {
        if(array[i]%2==0)//if the num1 is an even number
        {
            num.push(array[i]);//num is the container where we are pushing the array index number into this contaier
        }
    }
    return num;//put this here to show the accumulation of all the evens
}

//---multiple using functions-----------------------------------------------------------
/*
function multi(num,num1)//function with parameters
{
    let sum=num*num1;
    return sum;
}
console.log(multi(2,3));//2,3 are arguments
*/