/*
what if put this in a loop to make it rotate the color as we click it
    */

var color=["blue","green","red", "yellow"]
var nextcolor=0;

function changeColor(){
    var outerdiv=document.getElementById("grid")//all the divs within id=grid are in outerdiv
    var boxes= outerdiv.getElementsByTagName("div")//all of the divs 

    for(i=0; i<boxes.length; i++)
    {
        boxes[i].style.backgroundColor=color[nextcolor];
    }
        if (nextcolor<color.length-1)//if nextcolor's index is less than index 3=yellow then with each click the color will change to the next index
        {
            nextcolor +=1//each index will increment which means with each click there will be a color change in the circles
        }
        else{
            nextcolor=0//if array color index is 3=3(aka yellow) then it will go back to blue
        }    
}
