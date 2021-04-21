

function getData()
{
    let limit=document.getElementById("textNum").value;
    let borough= event.target.innerHTML.toUpperCase();
    
    fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=" + borough + '&$limit=' + limit)
    .then((rawData)=> rawData.json())
    .then((formattedData) => displayData(formattedData))
    
    
}

function displayData(data)
    {
        removeData();
        console.log(data);

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
            btn.style.position= "fixed";
            btn.style.left="1000px";
            btn.style.color="red";
            
            
            node.innerHTML=oneValue;
            nodeB.innerHTML=resolution;
            tada1.append(node);
            tada1.append(btn);
            tada1.append(nodeB);

            nodeB.hidden = true;
        }   
    }

function removeData()
{
    let limit=document.getElementById("textNum").value;//

    let tada1 = document.getElementById("tada");//refering to HTML line 22
    let outerdiv = tada1.childNodes
            console.log(outerdiv)
    if(tada1.hasChildNodes()) 
    {
        for (let i = 0; i < limit; i++)    
        {
            for (let j = 0; j < outerdiv.length; j++)
            {
            outerdiv[j].remove();
            }
        }
    }
}

function show() //when you click on btn response it will disappear 
{
    x = event.target.nextSibling//nextsibling is refering to line 39
        if (x.hidden == true)
        {
            x.hidden = false
        }
    else x.hidden = true
    console.log(x)
}

