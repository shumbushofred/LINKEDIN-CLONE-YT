import React from 'react'
import "./Login.css"
function Login() {
    return (
        <div className = "login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png" alt=""/>
       <form>
           <input placeholder="Full name (required if registering" type="text" />
           <input placeholder="Profile pic URL (optional)" type="text" />
           <input placeholder="Email" type="email" />
           <input placeholder="Password" type="password" />
           <button>Sign In</button>
       </form>
       <p>Not a member?
            <span className="login__register">Register Now</span>
       </p>
        </div>

    )
}

export default Login
