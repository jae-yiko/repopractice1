/*NOTES
nameofarray=name.toString();<< toString combines all of the strings in an array and makes it into ONE string aka one index
nameofarray=name.join("|"); <<can change | into any seperator between each string
nameofarray=name.split(",");<<separates each let name="jane, penny, jack". creates 0-2 index numbers
nameofarray=name.split("");<<separates every character in let name="jane, penny, jack". and will look like "j,a,n,e,-,p,e,n,n,y,-,j,a,c,k"
nameofarray=name.split("-");<<separates one element let name="jane- penny- jack". creates 0-2 index numbers
nameofarray=name.sort();<< will organize string into A-Z order
*/

let name1=["Bob", "Jane", "Penny", "Amy"];//this is a string
let arrayname1=name1.toString();//this will combine all the string into index 1=a single string
let arrayname2=name1.join("|");//this will put | inbetween each "" | ""
let arrayname3=arrayname2.split("");//this will go from Bob string 

document.getElementById("para3").innerHTML=arrayname3;//shows on html para3

//------------------------------------------------------------------------

let name2="Bob,Jane,Penny,Amy";
let arrayname4=name2.split(",");//this will split a single string into seperate strings that are already separated with  , 
let arrayname5=arrayname4.sort();//this will sort the line 20 array into A-Z order

document.getElementById("para5").innerHTML=arrayname5;//shows on html para5
