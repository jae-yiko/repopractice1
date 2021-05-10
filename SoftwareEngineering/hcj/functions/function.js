//NOTE  
//functions are a piece of code that we can use over and over again 
//functions can hold one or more complete lines of code
//data can be passed into a function and function can return data back (this means we get data back that we can use for something else in the program)
//parameters are like variables specific to this function and are defined once we call the function. parameters represent input data of this function 
//return in a function is the result of the function when the function is called
//if you never use, call,invoke or run the function shown in line 30 that function is never being executed
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
    //Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of 
    //whether their scope is global or local.

//-----using parameters in a function declaration-----------------------------------------------------------------------------------------
//made a generic hell my name is function that works for any first and last name and age
//because this is a function declartion we are able to call this function before the function is defined (line 14) BUT this cannot be done with function expression. This is because of hoisting
const show2 = intro("Dark", "Chocolate", 108);
console.log(show2);

function intro(fname, lname, age)
{
    console.log(fname,lname,age);//this is to show that the arguments are being used in this function as hoped
    const sentence = `Hello my name is ${fname} ${lname}. I am ${age} years old`;//remember to use backticks if you wana use ${}
    return sentence;
}
//if you want to see the results of your function you can put the arguments that you used in a variable and then console it OR just put that everything in variable line 16 into console.log
const show = intro("Jae-yi", "Ko", 5);//in intro these are called arguments 
console.log(show);


//----function expression--------------------------------------------------------------------------------------------

const show3 = function(fname, lname, age)
{
    return `Hello my name is ${fname} ${lname}. I am ${age} years old`
}

console.log(show3("Benny","Penny", 100));//this is how to call a function expression and this must be written after the function (27-30) has been defined. This is because of hoisting
//-----practice-----------------------------------------------------------------------------------

/*
function printMessage()
{
    return 12+10;
}
//below is how we can use functions can also be called calling, invoking or running the function.
printMessage();

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
/*
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
*/
//---multiple using functions-----------------------------------------------------------
/*
function multi(num,num1)//function with parameters
{
    let sum=num*num1;
    return sum;
}
console.log(multi(2,3));//2,3 are arguments
*/
