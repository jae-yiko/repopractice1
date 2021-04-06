/*
var date= new Date()
date.getHours()
date.getMinutes()
date.getSeconds()

less than 12 = good morning
12pm-4pm = good afternoon
else =hello how are you 
//--------------------------------------------
*/

var date= new Date();
var hr=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();
var current= hr + ":" + min + ":" + sec;

if (hr<12){
    console.log( 'good morning');
}

else if (hr>=12 && hr<=16){ //time has to be in military time. ex: 4pm = 16
    console.log( 'good afternoon');
}

else{
    console.log( 'hello how are you');
}


console.log(current);  //connected by 16

