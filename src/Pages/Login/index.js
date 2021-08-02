import React from 'react'
import LoginForm from '../../components/LoginForm'
import './log-in.scss'
import login from '../../assets/images/login.png'

function Login() {
    return (
        <div className="background">
        <div className="container">
        <div className="login-flex">
            <div className="figure-side">
            <h1 className="h1"> Hi, Welcome Back</h1>
            <figure>
                <img className="img-width" src={login} />
                </figure>
            </div>
            <LoginForm />
        </div>
        </div>
        </div>
    )
}

export default Login
