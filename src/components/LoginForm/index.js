import React, {useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import google from '../../assets/images/google.png'
import './login-form.scss';
import { useAlert} from "react-alert";

import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducer/userSlice';
import Loader from "../Loader/loader";
import {useLoginHooks} from "../../hooks/useQueriesHooks";


 function LoginForm() {
     const [state, setState ] = useState({
         email: "",
         password:""
     });
     const alert = useAlert()
     const dispatch= useDispatch()
     const history = useHistory();
     const [
         getUser,
         { error, data,loading }
     ]  =useLoginHooks()


     const handleChange = (name, value) => {
         setState({...state, [name]: value})
     }

     useEffect(()=>{
         if (error){
             alert.error(error.message,{timeout:5000})
         }
         if (!loading&&data){
             dispatch(login(data.loginUser.user))
             localStorage.setItem('token', data.loginUser.token);
             history.push('/')
         }
     },[error,loading])
     const submitForm=async(e)=> {
         e.preventDefault()
         if (state.email.length&&state.password.length){
             getUser(
                 {
                     variables: {
                         userName: state.email,
                         password: state.password
                     }
                 })
         }
     }


    return (
        loading ? <Loader/> :
                <div className="all-item-alighn">
                    <h1 className="h1"> Sign in to ioffer</h1>
                    <div className="button-postion">
                        <div className="facebook icon-flex">
                            <img src={google} width="30px" height="30px"/>
                            <p>Login with Google</p>
                        </div>
                    </div>
                    <div className="all-item-alighn">
                        <form className="form-design" autoComplete="off" onSubmit={submitForm}>
                            <TextField
                                fullWidth
                                // error={error}
                                autoComplete="username"
                                type="email"
                                label="Email address"
                                onChange={(e) => handleChange('email', e.target.value)}
                                value={state.email}
                                required
                            />

                            <TextField
                                fullWidth
                                // error={error}
                                autoComplete="current-password"
                                type="password"
                                label="Password"
                                onChange={(e) => handleChange('password', e.target.value)}
                                value={state.password}
                            />

                            <FormControlLabel
                                control={<Checkbox/>}
                                label="Remember me"
                            /><br/>
                            <button className="button">Login</button>
                        </form>
                    </div>
                    <div className="register">
                        <h4>Don’t have an account?&nbsp;<Link to='/register'>Register</Link></h4>
                    </div>
                </div>
    )
}

export default LoginForm
