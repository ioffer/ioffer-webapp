import React, { useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'
import google from '../../assets/images/google.png'
import './register-form.scss'
import {useHistory} from 'react-router-dom'
import { useAlert} from "react-alert";
import {RegisterUserHook} from "../../hooks/useMutationsHooks";
import Loader from "../Loader/loader";


function RegisterForm() {
    const history = useHistory();
    const alert=useAlert();
    const [loader,setLoader]=useState(false);
    const [state, setState] = useState({
        fname: "",
        userName: "",
        email: "",
        password: ""
    })
    const onSuccess=(data)=>{ 
        console.log(data,"===")
        alert.success("Successfully Register",{timeout:4000})
        setLoader(false)
        history.push('/login')
    }
    const onError=(error)=>{
        console.log(error,"===")
        alert.error(error.message,{timeout:4000})
        setLoader(false)
    }
    const [register, { loading}] = RegisterUserHook(onSuccess,onError)

    const handelChange = (name, value) => {
        setState({...state, [name]: value})
    }
  
    const submitForm = async(e) => {
        e.preventDefault()
        register({
            variables: {
                name: state.fname,
                userName: state.userName,
                email: state.email,
                password: state.password
            }
        }).catch(err =>{
            console.log(err)
        })
    }

    return(
    loading ? <Loader/> :
        <div className="all-item-alighn">
            <h1 className="h1"> Get started absolutely free.</h1>
            <p>Free forever. No credit card needed.</p>

            <div className="button-postion">
                <div className="facebook icon-flex">
                    <img src={google} width="30px" height="30px"/>
                    <p>Login with Google</p>
                </div>
            </div>

            <form className="register-form" autoComplete="off" onSubmit={submitForm} >
                <div className="form-grid">
                    <TextField
                        fullWidth
                        required
                        autoComplete="Full Name"
                        type="text"
                        label="Enter Your Name"
                        onChange={(e) => handelChange('fname', e.target.value)}
                        value={state.fname}
                    />
                    <TextField
                        fullWidth
                        required
                        autoComplete="Username"
                        type="text"
                        label="Enter Your Username"
                        onChange={(e) => handelChange('userName', e.target.value)}
                        value={state.lname}
                    />
                </div>
                <TextField
                    fullWidth
                    autoComplete="email"
                    type="email"
                    label="Email address"
                    onChange={(e) => handelChange('email', e.target.value)}
                    value={state.email}
                />
                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type="password"
                        label="Password"
                        onChange={(e) => handelChange('password', e.target.value)}
                        value={state.password}
                    />

                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Remember me"
                    />
                    <button className="button">Register as User</button>
                    
                  
                </form> 
                <button className="button">Register as Vendor</button>
                <div className="register">
                    <h4>Already have a account ?<Link to='/login'>Login</Link></h4>
                </div>
    </div>
    ) 
}

export default RegisterForm
