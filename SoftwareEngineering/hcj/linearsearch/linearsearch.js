
let isFind= false;//declaring boolean
let indexNum;

function linearsearchmethod()
{
    for(let i=0; i<array1.length; i++)
    {
        if (find==array1[i])//if fing5=array5 then
        {
            isFind=true;//boolean is true
            indexNum=i;//location of index is stored in indexNum
            break;//stops the loop after we foudn what we are looking for
        }
    }
    if(isFind==true)
    {
        //indexNum+1 because index starts with 0 but normal people dont count starting from 0 so you +1 to the index
        return find + " found in location " + (indexNum+1);
    }
    else
    {
        return "your fumber is not found"
    }
}