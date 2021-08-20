import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'
import google from '../../assets/images/google.png'
import {useHistory} from 'react-router-dom'
import { useAlert} from "react-alert";
import {RegisterUserHook} from "../../hooks/useMutationsHooks";
import Loader from "../Loader/loader";


function VendorRegister() {
    const history = useHistory();
    const alert=useAlert();
    const [VendorState, setVendorState] = useState({
        fname: "",
        userName: "",
        email: "",
        password: "",
        shopName:""
    })
    const handelChange = (name, value) => {
        setVendorState({...VendorState, [name]: value})
    }

    return(
    
        <div className="all-item-alighn">
            <h1 className="h1"> Get started absolutely free.</h1>
            <p>Free forever. No credit card needed.</p>

            <div className="button-postion">
                <div className="facebook icon-flex">
                    <img src={google} width="30px" height="30px"/>
                    <p>Login with Google</p>
                </div>
            </div>

            <form className="form-design" autoComplete="off" >
                <div className="form-grid">
                    <TextField
                        fullWidth
                        required
                        autoComplete="Full Name"
                        type="text"
                        label="Enter Your Name"
                        onChange={(e) => handelChange('fname', e.target.value)}
                        value={VendorState.fname}
                    />
                    <TextField
                        fullWidth
                        required
                        autoComplete="Username"
                        type="text"
                        label="Enter Your Username"
                        onChange={(e) => handelChange('userName', e.target.value)}
                        value={VendorState.lname}
                    />
                </div>
                <TextField
                        fullWidth
                        required
                        autoComplete="Shop Name"
                        type="text"
                        label="Enter Your Shop Name"
                        onChange={(e) => handelChange('shopName', e.target.value)}
                        value={VendorState.shopName}
                    />
                <TextField
                    fullWidth
                    autoComplete="email"
                    type="email"
                    label="Email address"
                    onChange={(e) => handelChange('email', e.target.value)}
                    value={VendorState.email}
                />
                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type="password"
                        label="Password"
                        onChange={(e) => handelChange('password', e.target.value)}
                        value={VendorState.password}
                    />

                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Remember me"
                    />
                    <button className="button">Register</button>
                  
                </form>
                    <button>Login As a User</button>
                

                <div className="register">
                    <h4>Already have a account ?<Link to='/login'>Login</Link></h4>
                </div>
    </div>
    )
}

export default VendorRegister
