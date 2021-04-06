//1-50 and find a number that is divisalb by 3 and print a message "fizz" if its divisualbe by 5 message"buzz" if divisiablle by 3 and 5 message fizzbuzz
/*

for (let counter=1; counter<= 50; counter++)
{
    if (counter%3==0 && counter%5==0){
        console.log(counter + " fizzbuzz");
    }
        else if (counter%3==0){
            console.log(counter + " fizz");
        }
        else if (counter%5==0){
            console.log(counter + " buzz");
        }
}
console.log("the end");

//-------------below is while loop------------------------------------------------------------------------
/*let num=1
while(num<=10)
{
    console.log(num);
    num++;
}
*/
let counter=1;
while (counter<= 50) 
{
    
    if (counter%3==0 && counter%5==0){
        console.log(counter + " fizzbuzz");
    }
        else if (counter%3==0){
            console.log(counter + " fizz");
        }
        else if (counter%5==0){
            console.log(counter + " buzz");
            counter++;
        }
}
