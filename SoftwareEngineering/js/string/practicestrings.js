/*NOTES
let fname="john" 
let lname="smith"

John is sitting on the chair
01234
properties: length
methods: touppercase() //come with objects aka strings 

fname.toLowerCase()

fname.concat(lname) //attaching first name to last name 

fname.indexOf('o',1,3) //gives number index. everything separated with , are parameters

fname.indexOf('o',4) //indexof finds the first matching index
fname.lastIndexOf('a') //lastindexof finds the last matching index 

fname.charAt(3) //pulls that character at that index
*/
//-------print out all the letters in string---------------------------------------------------------------------------------------
/*
let fname=" hello Penny ";
let hname=" hey Jack got any pancakes? ";

console.log(fname.toLowerCase()); //makes  everything fname lower case

console.log(fname.concat(hname)); //combines fname and hname

console.log(fname.indexOf('o')); //finds index# of the letter o in fname which is 4 ("0,1,2,3,4,5" = " ,h,e,l,l,o") starting from the left side

console.log(hname.lastIndexOf('a')); // finds index# of the last letter a in fname which is 22

console.log(fname.charAt(7));// finds the 3rd index in fname and prints the letter, so it should be 'P' printed
*/
//------slice types---------------------------------------------------------------------------------------

/*
name="Tom and Jerry"
name= name.toUpperCase()
Strings are immutable (string can not be changed it can only be replaced)
var fname=name.slice(0, 4)//0 is the start location and 4 is the end
var fname=-name.slice(1) // this will make name look like "T o m  a n d  J e r r y"
var fname=name.slice(1,5)//


list="$1= soda, $2= bread, $3= ice cream"
var grocery=list.slice(9,34); //shows what is not been sliced
var budget="$5 budget"

console.log(budget);
console.log(grocery);
*/
//----------------------------------------------------------------------------------------------
//store and print the vowels
/*
"Store a sentence in a string variable and find the total number of vowels that string contains
you can display those vowels if you want to"


list="$1= sOda, $2= bread, $3= ice cream";//list
let lowList=list.toLowerCase(); //incase user puts any uppercase letters
let vowel=0;//needs to equal to 0 or in line 69 it cant count the total vowels found

for (let v=0; v<lowList.length; v++)
{
    if (list.charAt(v)=="a" || list.charAt(v)=="e" || list.charAt(v)=="i" || list.charAt(v)=="o" || list.charAt(v)=="u")
    {
        vowel++;//counts each vowels found from the list and now you can console.log to see it
        console.log(vowel + list.charAt(v));
    }
}
*/

/*NOTES
==compares only value
===compare data type AND value

ex.
str1="tom"
str2="Tom"
if(str1==str2) //false
if(str1===str2) //false

ex.
str='1'
num=1
if (str1==num) //false
if (str1===num) //true

palindrome: reading word left or right the results are the same word
ex.did / racecar

*/

//------palindrome------------------------------------------------------------------------------------------------------------------------
/*
//create a loop to find out if the word is a palindrome
//normal.length-1 length=total amount of characters in this case its 3 but total index is 2. 3-1=(2 length = 2 index) 
let normal="did";//the word we want to mutate
let backward="";//where to store the mutated word


for (let index=normal.length-1; index>=0; index--)//decrement
{
    backward += normal.charAt(index);//backward+normal.charAt(index)=backward  << normal.charAt(index) from normal each index will be pulled and added into backward
    console.log(backward);//this will show the palindrome steps
}

if (normal==backward)
{
    console.log(backward + " palindrome");
}
else
{
    console.log(normal + " NOT palindrome");
}
*/