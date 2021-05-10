//find out about this:
//substr()
//substring()
//switch/case
//-----------------------------------------------------------------------------------------------------------

//ARRAY contains more than one elements
let num=[]//this is array because of []
let sum=0;
num.push(0);//push adds more ...
    for (let i=1; i<=10; i++)//1-10 is multiplied by 5 and all these values are in the array
    {
        num.push(5*i);//5 times i (which is 1-10) everytime its being multiplied it will be added into num
        num.pop();//pushes a variable out and then the number will decrease
    }

    //accessing or displaying values of the num arrays
    for(let i=0; i<num.length; i++)
    {
        console.log(num[i]);
    }
*/
//let num=[5][3]//left is 5 row and right is 3 column
//--------------------------------------------------------------------------------------------------


let num1=[1,2,3,4,5];//to get 1 do num[0]
let sum=0;

for (let i=0; i<num1.length; i++)
{
    //sum=sum+num1[i]; this is more simplified in line 33
    sum+=num1[i];
}
num1.push(100);
sum+=num1[num1.length-1];
console.log(sum);
*/
//------------------------------------------------------------------------------------------------------
/*3 arrays
combine array 1 and 2
push each sum of array 1 and 2 into array 3 and print it 
*/
let num1=[1,2,3,4];
let num2=[5,6,7,8];
let num3=[];//empty for now because once you add num1 and num2 your going to add num3 inside it

for(i=0; i<4 ; i++)//instead of num1.length do 4 so that it can count the index of num1 and num2 all in this one line
{
    num3.push(num1[i]+num2[i]);////need to add num1 and num2 and push into num3 before putting in console otherwise it will not show up in num3
    console.log(num3[i]);//print what is inside num3
}
//------same thing but just a repetitive and not the best------------------------------------------------
let num1=[1,2,3,4];
let num2=[5,6,7,8];
let num3=[];//empty for now because once you add num1 and num2 your going to add num3 inside it

for(i=0; i<num1.length; i++)//middle: the total length of num
{
    for(i=0; i<num2.length; i++)//middle: the total length of num
    {
        num3.push(num1[i]+num2[i]);//need to add num1 and num2 and push into num3 before putting in console otherwise it will not show up in num3
        console.log(num3[i]);//print what is inside num3
    }

}