/*
strings project:
5-6 string methods that is usful and free to anything we covered

scenario:
user writes list and computer counts and indicates which word has that letter as the first letter watever character the user wants
*/
/*
//let chocolate=["Butterfinger", "Tobleron", "Reeses", "KitKat", "Hersheys", "Maltesers", "Snickers"];
//console.log(chocolate.map(a => a.toLowerCase()));
*/
let first="Jae "//first name
let last="Ko"//last name
let list="Mississippi";//user inputed word
let vowel=0;//needs to equal to 0 or in line 69 it cant count the total vowels found
const find="i"//user wants to find this word
for (let v=0; v<list.length; v++)//middle v means 0-last letter
{
    if (list.charAt(v)==find)//charAt will pull the letter
    {
        vowel++;//counts each vowels found from the list and now you can console.log to see it
        console.log(`there is ${find} ${vowel} in the word ${list.toUpperCase()}`);
    }
}
console.log(`In your word, the first ${find}s index is ${list.indexOf(find)}. Please remember that the first letter of your words index is a 0`)
console.log(`In your word, the last ${find}s index is ${list.lastIndexOf(find)}`)
console.log(`Thank you ${first.concat(last)} for utilizing my program`);