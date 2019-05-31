import React from "react"
import './login.css'

const users = [
    {
    name: 'jlunatic',
    password: 'password123'
}
]




function login(){
  window.localStorage.setItem('users', JSON.stringify(users)) 

}

const Login = props => {
    
    return (
        <div className="login-wrapper">
            <form className="login-form" onSubmit={login}>
                <input type="text" value="" placeholder="UserName.." name="user"/>
                <input type="text" value="" placeholder="Password.." name="password" />
                <button onClick = {login} >Submit</button>
            </form>
        </div>
    )
}

export default Login