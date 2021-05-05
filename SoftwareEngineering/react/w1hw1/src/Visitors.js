import React from 'react'
//put the number in a state so that it can change
//props is a object that has properties in it . that we pass down to the component and is represented as a parameter
const Visitors = (props) => {
    return (
        <div>
         
            <h3>website visitors</h3>
            {props.visitorNum}
            
        </div>
    )
}
//need {} because the return statement in line 5 returns jsx and the point of jsx is to combine html and js and in order for a line to know that its a jsx you need {} in order for computer to know that
export default Visitors
