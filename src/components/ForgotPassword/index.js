import { TextField } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './forgot-password.scss'
import forgot from '../../assets/svgicons/forgot.svg'
import { ForgotPasswordHook } from '../../hooks/useMutationsHooks'
import {useHistory} from 'react-router-dom'

function ForgotPassword() {
    const [email,setEmail]=useState("")
    const [loader,setLoader]=useState(false);
    const history = useHistory();

    const onSuccess=(data)=>{ 
        setLoader(false) 
        history.push('/verify-email')
    }
    const onError=(error)=>{
        alert.error(error.message,{timeout:4000})
     
    }
    const [forgotPassword, { loading}] =  ForgotPasswordHook(onError,onSuccess)
   
    const onsubmit=(e)=>{
        e.preventDefault()
        forgotPassword({
            variables: {
              email: email,
            }
        }).catch(err =>{
            console.log(err)
        })
    }
    return (
        <div className="verify-height">
            <div className="main-forgot-div" >
           <img src={forgot} className="success-svg" />
           <h3 className="forgot-password-heading">Forgot Password? </h3>
           <p>Please enter your email address to search for your account.</p>
           <form className="register-form" onSubmit={onsubmit}>
           <TextField
                 fullWidth
                 autoComplete="current-password"
                 type="email"
                 label="Enter Your Email"
                 onChange={(e) => setEmail( e.target.value)}
                 value={email}
            />
            <button className="button">Submit</button>
           </form>
         
            </div>
           
            
       </div>
    )
}

export default ForgotPassword
