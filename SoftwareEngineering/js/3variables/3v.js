var v1=1;
var v2=50;
var v3=10;
var largest;

if(v1>v2 && v1>v3){
    largest=v1;
}
else if (v2>v1 && v2>v3){
    largest=v2;
}
else {
    largest=v3;
}

console.log(largest + " is the largest number");

//this code will see which variable is the largest and then show the largest number