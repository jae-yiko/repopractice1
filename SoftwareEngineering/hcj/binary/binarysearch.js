
let isFind= false;//declaring boolean
let indexNum;
function findNum(search,num1)
{
    //let show=[];//container to store the found search #
    let start=0;
    let end=num1.length-1;//end number once its been sorted
   

    for(i=start; i<=end;)
    {
        let mid=Math.floor((start+end)/2);//mid number after combining start and end index number and then dividing by 2 and arounding down
        if (search==num1[mid])//index2 #=search#
        {
            isFind=true;//boolean is true
            indexNum=i;//storing found number index in here
            return num1[mid] + " is located in " + mid;
        }
        
        else if(search>num1[mid])
        {
            start=mid+1;//start=2+1=3
            
        }
        else//search<num1[mid]
        {
            end=mid-1;//end=2-1=1
            
        }
    }
    
    return search + "  cannot be found"
}

//console.log(findNum(search,num1));//only to check to see if the js is working in console