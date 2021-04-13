/*
1
22
333
4444
55555

this is a grid 
nested for loop
row equals column
*/

for (let row=1; row<=5; row++) //row is incrementing from 1-5
{
    for (let col=1; col<=row; col++) //column is incrementing from 1-5 is because the row in also incrementing
    {
        process.stdout.write(row.toString() + " ") //without row.toString the row would not show the stages of incrementation
    }
    console.log();//shows the results
}

//-----------------------------------------------------------------------------------------------------------------
/*
12345
1234
123
12
1
*/

for(let row=5; row>0; row--) //starting from 5 decrement down to 0
{
    for(let col=1; col<=row; col++)//column is counting from 1-5 and then decrementing 
    {
        process.stdout.write(col.toString() + " ");//put this as a column and the columns are stringed
    }
console.log();
}
