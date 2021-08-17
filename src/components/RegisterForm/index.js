import React, {useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'
import google from '../../assets/images/google.png'
import './register-form.scss'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { useAlert} from "react-alert";
import { login } from '../../redux/reducer/userSlice';
import {RegisterUserHook} from "../../hooks/useMutationsHooks";
import Loader from "../Loader/loader";

function RegisterForm() {
<<<<<<< HEAD
  const history = useHistory();
  const[errors,setErrors]=useState({})
  const [state, setState ] = useState({
    fname: "",
    userName: "",
    email: "",
    password:""
})
 const dispatch = useDispatch()
const [registerUser, { data, loading, error }] = useMutation(register);
      // if (loading) return <div className="loader"></div>;
      if (error) return `Submission error! ${error.message}`;
=======
    const history = useHistory();
    const alert=useAlert();
    const [state, setState] = useState({
        fname: "",
        userName: "",
        email: "",
        password: ""
    })
>>>>>>> bf0966effde2ef6b5dcdf21660806cb139943321

    const [register, {data, loading, error}] = RegisterUserHook()

    const handelChange = (name, value) => {
        setState({...state, [name]: value})
    }
    useEffect(() => {
        if (error) {
            alert.error(error.message,{timeout:4000})
        }
        if (data&&!loading){
            alert.success("Successfully Register",{timeout:4000})
            history.push('/login')
        }
    }, [data, loading, error])

    const submitForm = (e) => {
        e.preventDefault()
        register({
            variables: {
                name: state.fname,
                userName: state.userName,
                email: state.email,
                password: state.password
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        loading ? <Loader/> :
            <div className="all-item-alighn">
                <h1 className="h1"> Get started absolutely free.</h1>
                <p>Free forever. No credit card needed.</p>

                <div className="button-postion">
                    <div className="facebook icon-flex">
                        <img src={google} width="30px" height="30px"/>
                        <p>Login with Google</p>
                    </div>

<<<<<<< HEAD
            </div>
           
             <form className="form-design" autoComplete="off" onSubmit={submitForm}  >
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
=======
                </div>

                <form className="form-design" autoComplete="off" onSubmit={submitForm}>
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
>>>>>>> bf0966effde2ef6b5dcdf21660806cb139943321

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
                    <button className="button">Register</button>

                </form>

                <div className="register">
                    <h4>Already have a account ?<Link to='/login'>Login</Link></h4>
                </div>
            </div>
    )
}

export default RegisterForm
