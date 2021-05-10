//NOTES
//using array.filter()
//this is used to filter an array to the condition of your choice and then put all the filtered ones into a new array

const num = [-2,-1,0,1,2];

const filtered = num.filter(function(value)
{//any number less than or equal to 0 will be in the new array called filtered
    return value >= 0;
});

console.log(filtered);


//below we will write the exact same function just using arrow functions
const filtered2 = num.filter(value => value >=0);

console.log(filtered2);