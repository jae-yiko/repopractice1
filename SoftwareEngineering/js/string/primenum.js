/* NOTES:
prime number: number that is ONLY divisable by that itself AND one
num=34
make a logic for this to see if this is a prime number
1-10 print all the prime numbers within this range

let flag=false; << boolean
break; << breaks the current loop.
    -we use break so that the computer does not loop multiple times and without it, the program will be slow
ex:
    for (let num=1; num<=10;num++)
    {
        if(num==5)
        break;
    }
    //control comes here

    */
//------prime number in loop--------------------------------------------------------------------------------------------------------------------
/*
for (var counter = 2; counter <= 100; counter++) //checking to see from 1 to 100 which #'s are prime
{
    var notPrime = false;
        for (var num1=2; num1<counter; num1++) //starting from 2 to any # less than 100 <<this will be used to divide by the counter
        {
            if (counter%num1==0 && num1!==counter) //every number divisable by 2 AND not number 2 is considered not prime
            {
                notPrime = true;
            }
        }
        if (notPrime === false) //everything else that doesnt fit in the condition of line 41 then it is a prime
        {
            console.log(counter);//print only prime number
        }
}
*/
//------prime number by user variable--------------------------------------------------------------------------------------------------------------------
let counter=11; //user variable
let isPrime= true; //check to see if the condition is true and if it is, it is called a prime number
for(let num1=2; num1<counter; num1++)
{
    if (counter%num1==0)
    {
        isPrime=false;
        break;
    }
}
if (isPrime==true)
{
    console.log(counter + " Prime")
}
    else if (isPrime==false)
    {
        console.log(counter + " NOT Prime")
    }

    