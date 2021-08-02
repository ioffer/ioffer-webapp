import React from 'react'
import RegisterForm from '../../components/RegisterForm'
import register from '../../assets/images/register.png'
import ioffer from '../../assets/images/ioffer.png';
import {Link} from 'react-router-dom'

function Register() {
    return (
        <div className="background-color">
        <div className="container">
        <div className="login-flex">
            <div className="figure-side">
               <Link to='/'><img src={ioffer} /></Link> 
            <h1 className="h1"> Manage the job more <br/ >effectively with ioffer</h1>
            <figure>
                <img className="img-width" src={register} />
                </figure>
            </div>
            <RegisterForm />
        </div>
        </div>
        </div>
    )
}

export default Register
