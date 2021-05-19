// https://reactjs.org/docs/hooks-state.html

import { useState } from 'react'
import Success from './Success'
import Fail from './Fail'


const LogIn = (props) => {
    //line 10 and 11 is what will be used to check to see if the username and password is correct
    const userCheck = 'jae';
    const passCheck = '123';

    //line 14 and 15 is used to take users input for username and password
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    //showLogin used in handleLogin to set the result for the if statements
    const [showLogin, setShowLogin] = useState("")


    const handleLogin = (event) => 
    {

        //event.preventDefault is added to cancel any default action that belongs to an event
        event.preventDefault()

        //checking to see if username(user input) = userCheck(hard coded) and the same goes for password
        if (username === userCheck && password === passCheck)
        {
            setShowLogin(<Success userCheck={userCheck}/> )
        }
        else 
        {
            setShowLogin(<Fail />)
        }
    }
    const handleChange1 = (event) => setUsername(event.target.value)
    const handleChange2 = (event) => setPassword(event.target.value)
    
    return(
        <div>
            <form onSubmit = {handleLogin}>
                <label> <input id="username" type="text" placeholder="Username" onChange={handleChange1}/></label>
                <label><input id="password" type="text" placeholder="Password" onChange={handleChange2}/></label>
                <button>Login</button>
            </form>
           <div> {showLogin} </div>
        </div>
    )
}


export default LogIn

// const HandleChange=(event)=>{const newUser = event.target.value; setUser(newUser)

// const handleChange=(event)=> setUser(event.target.value)

// const handleChange=({target})=>setUser(target.value)

// const LogIn (props) => {
//     // declaring a new state variable which is called username
//     //this.state.name = username.user1
//     //this.state = username
//     const [username] = useState({user1:''}) //returned value= [state, setState]

//     // const userCheck = "Jae123"
//     const [password] = useState({pass1:''})
//     const passCheck = "Jaeology!"

//     function 

//     const handleSubmit = (event) => {
 
//     }
    
//     return (
//         <div>
//             <form onSubmit = {handleSubmit}>
//                 <input className="user" text="text" placeholder="username"></input>
//                 <input className="pass" text="text" placeholder="password"></input>
//                 <button onClick={()=> setUsername(username) }>Login</button>
// {/* <input className="user" onChange = {event => setUsername(event.target.value)} ></input>
// <input className="pass" onChange = {event => setPassword(event.target.value)}></input> */}
//             </form>
//             <Success/>
//             <Fail/>