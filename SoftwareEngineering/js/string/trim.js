/*
trim()
str="   tom v   "
str.trim() //replace
ex.
message="I like hot coffee and a hot chocolate"

message.replace("hot,"cold")
message.replaceAll("hot","cold")//all of the hot and cold words
message.replace(/hot/gi,"cold") //replaces all the versions of the word hot. g stands for global, i is ignore case, ig is ignorcase and globally
message.includes("cafe")
message.endsWith("chocolate")//if true it will result in true
message.startsWith("chocolate")

padStart()
padEnd()
ex.
str="tom v"
str.padStart(10, 1)//total length of 10 and it will add five 1
results>> 11111tom v

str.padEnd(10,1)
results>> tom v11111

str.padStart(10," ")
results>>      tom v //there will be 5 spaces in from of the tom v
*/

let sentence="k9 breeds: German Shepherd, bulldog, poodle, larador retriever, golden retriever, and french bulldog";

//console.log(sentence.replace(/retriever/gi,"R"));//takes the word retriever in sentence and then changes it to R
console.log(sentence.padStart("100","1"));//does not work on windows but on mac will 
console.log(sentence.padEnd("100","1"));
//console.log(sentence.includes("bulldog"));//checks to see if the word bulldog is in the sentence
//console.log(sentence.endsWith("bulldog"));//check if sentence last word is bulldog and if it is then it is true
//console.log(sentence.startsWith("bulldog")); //check if sentence starts with the bulldog and if it is then it is true
