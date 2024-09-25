import React ,{useState,useContext}  from 'react'
import UserContext from '../context/UserContext'


//this is how the value from one component to the other can be transfer because here 
//setuser is comming from the UserContext and it is given a value so the value can be assign

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const {setuser} = useContext(UserContext)
    const SubmitHandler = (e) =>{
          e.preventDefault()
          setuser({username , password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setusername(e.target.value)}  type="text" placeholder='Enter name' />
      {" "}
      <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder='password' />
      <button onClick={SubmitHandler} >Submit</button>
    </div>
  )
}

export default Login
