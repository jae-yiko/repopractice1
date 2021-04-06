/* NOTE!
let number=1;

process.stdout.write(blah.toString) << process.stdout.write MUST have .toString in it in order for it to work! if you try to put a number in without a .toString it will not work!
    -if you wrtie two processes it will aitomatically stay in the same line

console.log(number) << in here you can put number without .toString
    -if you write two consoles it will automatically go into a different line

let number=1 <<this is a number
let string='hi' <<this is a string
    */

//(r,c)
//in a grid make sure to label the entire row before moving on to the next row
/* 
let value=1;
for (int row=1; row<=4; row++)//outerloop
{
    for (let col=1; col<=4; col++)//inner loop
    {
        //console.log(value++); <<instead of writting this write line 10. we write line 10 bcuz it will label horizontally
        process.stdout.write(value.toString())  //this is a node js command and because we installed node it will work
    }
    console.log();
}

//--------------------------------------------------------------------------------------------------

let value=1;
for (let row=1; row<=4; row++)
{
    for (let col=1; col<=4; col++)
    {
        num=value++; //this is one way
        process.stdout.write(num.toString() + " ")  //remember to put num in here
    }
    console.log();
}
//-------------------------------------------------------------------------------------------------
let value=1;
for (let row=1; row<=4; row++)
{
    for (let col=1; col<=4; col++)
    {
        process.stdout.write(value.toString() + " ") //just add value here
        value++; // this is another way without using num
    }
    console.log();
}

//----------adding * to all the row&column-----------------------------------------------------------------------
let value="*"; //put "*" because its not a value and its somnthing you want it to show 
for (let row=1; row<=5; row++)
{
    for (let col=1; col<=3; col++)
    {
        process.stdout.write(value + " ") // process.stdout.write(d) will print the data properly without a new line. However console.log(d) will print a new line but the data wont show correctly, giving this <Buffer 12 34 56... for ex. and string connects everything 
    }
    console.log();
}
*/
//----------------------------------------------------------------------------------------------------
//row=1 only
//row=2 only
/*
let value= 1; //one way to do this another way is right below it without this value
let numRow= 3; //user input
let numCol= 4; //user input

for (let row=1; row<=numRow; row++)
{
    for (let col=1; col<=numCol; col++)
    {
        process.stdout.write(value.toString() + " ") //just add value here
        
    }
    value++; //depending on the locatrion of this the increment changes
    console.log();
}

//----------------------------------------------------------------------------------------------------

let numRow= 3;
let numCol= 4;

for (let row=1; row<=numRow; row++)
{
    for (let col=1; col<=numCol; col++)
    {
        process.stdout.write(row.toString() + " ") //we got rid of the value and replaced with row
        
    }
    console.log(); //and do not need the row to increment in here
}
*/
//----------------------------------------------------------------------------------------------------
//way 1
//row 1 all have 1
//row 2 all have 2
//column 1 all have 1
//column 2 all have 2
/*
for (let row=1; row<=4; row++)
{
    for (let col=1; col<=4; col++)
    {
        process.stdout.write(row.toString() + "," + col.toString() + " | ")  //remember to put num in here
    }
    console.log();
}
*/
//----------------------------------------------------------------------------------------------------
//way 2
//row 1 all have 1
//row 2 all have 2
//column 1 all have 1
//column 2 all have 2

for (let row=1; row<=4; row++)
{
    for (let col=1; col<=4; col++)
    {
        let temp = row + "," + col;
        process.stdout.write(temp.toString() + " | ")  //remember to put num in here
    }
    console.log();
}

//hw play around with math.random()
// research web accessability: tools, examples. feautures in our webpage that makes web accessiable to everyone

