import { TextField } from '@material-ui/core'
import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { ResetPasswordHook } from '../../hooks/useMutationsHooks';
import {useAlert} from 'react-alert'
import reset from '../../assets/svgicons/reset.svg'
import Loader from '../Loader/loader';
import {useHistory} from 'react-router'

function ResetPassword() {
    const [loader,setLoader]=useState(true)
    const [ResetPassword,setResetPassword]=useState("")
    let { token } = useParams();
    const alert=useAlert()
    const history = useHistory();
    const onSuccess=(data)=>{ 
        setLoader(false) 
        alert.success("Password Changed Successfully ",{timeout:4000})
        history.push('/login')
    }
    const onError=(error)=>{
        alert.error(error.message,{timeout:4000})
        setLoader(false)
    }
    const [resetPassword, { loading}] =  ResetPasswordHook(onError,onSuccess)
  
    const onsubmit=(e)=>{
        e.preventDefault()
        resetPassword({
            variables: {
                token: token,
                password:ResetPassword,
            }
        }).catch(err =>{
            console.log(err)
        })
    }
    return (
       loading? <Loader/> :
        <div  className="verify-height">
            <div className="main-forgot-div">
            <img src ={reset}  className="success-svg" />
            <h1>Create New Password</h1>
            <p>Your must be different from the previous used Password</p>
            <form className="register-form" onSubmit={onsubmit} >
            <TextField
                fullWidth
                type="password"
                label="New Password"
                onChange={(e) => setResetPassword( e.target.value)}
                value={ResetPassword}
             />
             <button className="button">Submit</button>
             </form>
             </div>
                          
        </div>
    )
}

export default ResetPassword
