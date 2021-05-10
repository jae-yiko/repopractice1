//NOTES! 
//using array.map()
//in map method we are mapping each of these numbers that are in the array into somthing else 
const num = [1,2,3];
//n stands for number because in our array we are using numbers not strings
const arrayMap = num.map(n => '<li>' + n + '<li>');
console.log(arrayMap);

//this one is using a array.map() with to create 3 objects 
const arrayMap2 = num.map(n => ({value: n}));
console.log(arrayMap2);