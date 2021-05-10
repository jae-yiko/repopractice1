//this one below will show how sorting works by jade
//------------------------------------------------------------------------
/*
let num = [3, 1, 5, 9, 2, 4];
console.log();
console.log();
for (let i = 0; i < num.length - 1; i++) {
  console.log("---------");
  console.log("outer " + i + " (value: " + num[i] + ")");
  console.log(num);
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] > num[j]) {
      let swap;
      swap = num[i];
      num[i] = num[j];
      num[j] = swap;
      console.log("inner " + j + " (" + num[j] + " with " + num[i] + ")");
      console.log(num);
    }
  }
  console.log("---------");
  console.log();
  console.log();
}
console.log("result:");
console.log(num);

//----linear sort smaller number will be running first -----------------------------------------------------------------------------
let num=[20,3,78,100,-1,0];//answer should be -1,0,3,20,78,100

for(i=0; i<=num.length-2; i++)//middle is -2 because 6-2=5 so when i is 5 j will be 6 so now index 5 can compare with 6
{
    for(j=i+1; j<num.length; j++)
    {
        if(num[i]>num[j])
        {
            var temp= num[i];
            num[i]=num[j];
            num[j]=temp;
            //aftert this it goes to the inner loop   
        }
    }
}
console.log(num);
*/
//--------bubble sorting (ascending order)------------------------------------------------------------------------------
/*
let num=[20,3,78,100,-1,0];//answer should be -1,0,3,20,78,100

for(i=0; i<=num.length; i++)//middle is -2 because 6-2=5 so when i is 5 j will be 6 so now index 5 can compare with 6
{
    for(j=i+1; j<num.length-1; j++)
    {
        if(num[i]>num[j])
        {
            var temp= num[i];
            num[i]=num[j];
            num[j]=temp;
            //aftert this it goes to the inner loop   
        }
    }
}
console.log(num);
*/
num=[400,3,0,-7,-1,1000]
n=num.length-1
for(i=n;i>=1;i--)
{
    for(j=0;j<i;j++)
    {
       if(num[j]> num[j+1])
       {
        temp=num[j];
        num[j]=num[j+1]
        num[j+1]=temp
       }
    }
}
console.log(num);