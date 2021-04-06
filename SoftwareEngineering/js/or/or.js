/*or ||
var character = 'z' 
vowel: A E I O U
consonant: any other letter
var name = prompt ("enter your anme please;");<< add this as a user input thing
*/

var char = 'A';

var char = char.toLowerCase(); 

if (char=='a' || char=='e' || char=='i'|| char=='o' ||char=='u'){
    console.log( char + ' is vowel');
}
else if (char >=0 && char <=9){
    console.log(char + ' is number');
}
else{
    console.log(char + ' is consonant');
}


