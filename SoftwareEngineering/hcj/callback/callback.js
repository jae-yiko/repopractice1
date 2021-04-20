/*
callback function is a function that is passed into another 
function which is then executed on some sort of event(ex.eventlistener) 
or change of state
*/

let person1 = () => console.log("you there")//this will not be executed until after line 9 aka this is the callback

let y = (n1,n2,callback)=>
{
    console.log("numbers printed from finction y:" + n1 + " " + n2);
    callback();
}

y(2,7,person1);

