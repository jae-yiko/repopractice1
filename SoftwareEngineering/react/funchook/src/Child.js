import { useState } from 'react'

//props vecause you are reieving a props argument
function Child(props) {
    //will show the props
    console.log(props)
    return(
        <div>
            Child component:
            <br/>
            {props.name}
            <br/>
            {/* this is because of the imp */}
            {props.user.address}
        </div>
    )
}

export default Child