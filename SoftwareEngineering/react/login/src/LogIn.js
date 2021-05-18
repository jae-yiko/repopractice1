// https://reactjs.org/docs/hooks-state.html

import { useState } from 'react'
import Success from './Success'
import Fail from './Fail'


const LogIn = (props) => {
    //line 10 and 11 is what will be used to check to see if the username and password is correct
    const userCheck = 'jae';
    const passCheck = '123';
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showLogin, setShowLogin] = useState("")

    const handleLogin = (event) => {
        event.preventDefault()
        if (username === userCheck && password === passCheck){
            setShowLogin(<Success username={props.username}/>)
        }
        else {
            setShowLogin(<Fail />)
        }
    }
    const handleChange1 = (event) => setUsername(event.target.value)
    const handleChange2 = (event) => setPassword(event.target.value)
    return(
        <div>
            <form onSubmit = {handleLogin}>
            <label>Username: <input id="username" type="text" onChange={handleChange1}/> </label>
            <label>Password: <input id="password" type="password" onChange={handleChange2}/></label>
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