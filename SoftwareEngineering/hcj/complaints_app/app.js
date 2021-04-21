

function getData()
{
    let limit=document.getElementById("textNum").value;//textNum is the input id in html to get the limit
    let borough= event.target.innerHTML.toUpperCase();//this will grab whatever I clicked and store it and in this case it is any of the blue buttons and then capitalize it so that the link in line 8 so that the link will work
    
    fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=" + borough + '&$limit=' + limit)
    .then((rawData)=> rawData.json())
    .then((formattedData) => displayData(formattedData))
    
    
}

function displayData(data)
    {
        console.log(data);
        //innerHTML is text and tags
        let tada1 = document.getElementById("tada").innerHTML = "";


        for(let i in data)//for in loops are being used here
        {//attricute(id/class/onclick) are what characterizes elements(tag)
            
            let tada1 = document.getElementById("tada");//this is connected to html 15
            let node = document.createElement("p");
            let nodeB = document.createElement("p");
            let oneValue = data[i].descriptor;
            let resolution = data[i].resolution_description;

            
            //create > assign value=name=what we see in html > attach element
            let btn = document.createElement("button");//created btn
            btn.innerHTML="Response";//this is called the value/name/content
            let clickIt = document.createAttribute("onclick");//
            clickIt.value="show()";//show the resolution description
            btn.setAttributeNode(clickIt);//attaching attribute to btn
            btn.style.position= "fixed";//36-38 is only styling the response buttons
            btn.style.left="1000px";
            btn.style.color="red";
            
            
            node.innerHTML=oneValue;//created node will show oneValue in webpage
            nodeB.innerHTML=resolution;//created nodeB will show resolution in webpage
            tada1.append(node);//tada1 created in line 23 is referring to html line 23 meaning all 43-45 will be shown through tada
            tada1.append(btn);
            tada1.append(nodeB);

            nodeB.hidden = true;
        }   
    }

function show() //when you click on btn response it will disappear 
{
    x = event.target.nextSibling//event.target is whatever element that i clicked on (referring btn response) and nextsibling is referring to the next tag in this case its the <p> for nodeB
        if (x.hidden == true)
        {
            x.hidden = false
        }
        else
        { 
            x.hidden = true
        }
    console.log(x)
}

