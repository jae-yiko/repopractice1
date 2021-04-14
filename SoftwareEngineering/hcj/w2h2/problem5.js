/*NOTES
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


//--#5-para1-----------------------------------------------
Write a function that returns the number of
arguments passed to the function when called.
*/

function count(...arg)//...arg is called the restparameters it will calculate all arguments and not just two arguments
{
    return arg.length;
}

//---#6-para2-----------------------------------------------
function reverse(x)
{
    let word=(x.length-1);
    let show='';
    for(word; word>=0; word--)
    {
        show+=x.charAt(word);
    }
    return show;//return allows you to change the results after but if you console.log it you cant change it
}
//---#7-para3---------------------------------------------------

/*Write a function findLongestWord that takes an 
array of words and returns the length of the longest 
one.
*/
let words=["mississippi", "hi", "poodle"]
function longestword(words)
{
    for (i=0; i<words.length; i++)//starting from index 0-2
    {
        if(words[words.length-1].length<=words[i].length)//last index in array compared to 0-last array
        {
            var x=words[i]; //storing just the current index word
            words[i]=words[words.length-1]; //compares 0 vs 2 and if 0 is longer than 2 then the longer word will go to the back of the array
            words[words.length-1]=x;//if the word is longer it will go to the end of the array
        }
    }
    return words[words.length-1]//
}
//--#8-para4---------------------------------------------------------
/*
Write a function filterLongWords that takes an array of words and a 
number i and returns the array of words that are longer than i characters 
long.
*/

let words1=["mississippi", "hi", "poodle", "did"]
let length=6;
let j=[];
//whatever happens to p will happen to words1 in this function
function filterLongWords(p)//p will automatically know to = a single words1 array
{    
    for(let i=0; i<p.length; i++)//0-end of array index
    {
        if(p[i].length>=length)//if words1 index 0(mississippi) length is greater than or equal to 6 then
        {
            j.push(p[i]);//push the word mississippi into container j
        }
    }
    return j;//show all that is contained in j array
}
