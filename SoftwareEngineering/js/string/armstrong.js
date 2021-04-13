/*NOTES
num=123
quocient(q)=num/10 >>12/10 >>1/10
    use q=math.floor(number./10)
remainder(r)=num%10 >>12%10 >>1%10
(3*3*3)+(2*2*2)+(1*1*1)
while(q!=0)
{
    q=math.floor(num/10)
    r=num%10
    sum+=(r*r*r)
}

//determine which numbers armstrong numbers

let num1="1";
let num2="5";
let num3="3";
let theNum= num1+ num2+ num3;

if ()

*/

//extraction concept
let user=153;//constant number
let q=user;// changable number
let r=0;
let sum=0;

while(q!=0)// tells loop to stop after we get through 153 is ran through
{
    r= q%10; //153/10 =15.3 but because its %=modulo=3 
    q= Math.floor(q/10); //153/10 =15.3 but because of floor you are rounding down ANSWER 15 
    sum+= Math.pow(r, 3); //this can also be written like sum+=r*r*r;...in the 1st loop r=3 so sum=27, 2nd loop r=5 so sum=27+125, 3rd loop r=1 so sum=27+125+1=153
}

if (sum==user)
{
    console.log(user + " is an Armstrong Number");
}
else
{
    console.log(user + " is NOT Armstrong Number");
}
