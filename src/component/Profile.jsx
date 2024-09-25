import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    //the value of user is comming from the USercontext and the value is fetching which it holds
    const {user} = useContext(UserContext)

    if (!user) return <div>Please Login</div>
    
    return <div>Welcome {user.username}</div>
}

export default Profile
