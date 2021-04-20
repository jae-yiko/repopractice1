/*NOTES
promise is an object that keeps track of async code 

make new promise object
resolve is when the condition is true if its false then call it reject
call .then method when the promise is successful 
call .catch method when the promise is unsuccessful

*/
/*
let promise1 = new Promise((resolve, reject)=>
{
    let total = 2 * 7;
    if (total == 14)
    {
        resolve(total);
    }
    else 
    {
        reject ("incorrect total");
    }
})

promise1.then((value)=>
{
    console.log("correct! " + value);
    return value;
}).then((value)=>
{
    if(value%2 == 0)
    {
        console.log("and the total is an even number!");
    }
    else
    {
        console.log("and the total is an odd number!");
    }
})
promise1.catch((value)=>
{
    console.log(value + " guess the total again")
})
*/
//---promise2--if password is correct let user in-------------------------------------------------------

let password = new Promise ((resolve, reject)=>
{
    let savedPass = "pinkydinky123";//saved password
    let userInput = "pinkydinky123";//user putting in their password to access account
    if (savedPass == userInput)//if savedpass equals userinput then it is resolved if it is not then it is reject
    {
        resolve("you entered the correct password");
    }
    else
    {
        reject("you entered the INCORRECT password");
    }
})

password.then((message)=>//if password is resolve then show that message from line 52 and 63
{
    console.log(message);
    console.log(" Welcome back user:pinky1");
}).catch((message)=>//if password is reject catch the message from line 56 and 66
{
    console.log(message + " TRY AGAIN.");
})

//tomorrow starting object oriented programming concepts
