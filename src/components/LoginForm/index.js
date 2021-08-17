<<<<<<< HEAD
import React,{useState, useEffect} from 'react'
=======
import React, {useEffect, useState} from 'react'
>>>>>>> bf0966effde2ef6b5dcdf21660806cb139943321
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


<<<<<<< HEAD
 const signIn= gql`
query($userName: String!, $password: String!){
  loginUser(userName: $userName, password: $password) {
    user {
    id
    email
    userName
    type
    }
    token
  }
}
`;
=======
>>>>>>> bf0966effde2ef6b5dcdf21660806cb139943321

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

<<<<<<< HEAD
   const dispatch= useDispatch()
   const history = useHistory();
   const[errors,setErrors]=useState({})
   const [state, setState ] = useState({
    email: "",
    password:""
  })
 const [error, setError] = useState(false)

 const handelChange = (name, value) => {
  setState({...state, [name]: value})
  
  }
 const submitForm=async(e)=>{
  e.preventDefault()
  setError(false)
  if(state==""){
    setError(true)
    }
  const loginUser= await client.query({
    query:signIn,
    variables:{
      userName: state.email,
      password: state.password
    }
    }) .catch(error => {
    console.log(error.toString())
  });
  
  
 console.log(loginUser.data.loginUser.user)
  dispatch(login(loginUser.data.loginUser.user))
 
 console.log(loginUser,"loginUser");
  localStorage.setItem('token', loginUser.data.loginUser.token);
  // if(localStorage.getItem('token')){
  //   dispatch(login(loginUser.data.loginUser.user))
  // }
  history.push('/')
  
    }
=======

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
>>>>>>> bf0966effde2ef6b5dcdf21660806cb139943321

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

<<<<<<< HEAD
            <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          /><br />
          <button className="button">Login</button>
          </form>
          </div>
        
          <div className="register">
          <h4>Don’t have an account?&nbsp;<Link to='/register'>Register</Link></h4>
          </div>
        </div>
    )
}
const client = new ApolloClient({
  uri: 'http://192.168.1.28:4000/graphql',
  cache: new InMemoryCache()
});
=======
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

>>>>>>> bf0966effde2ef6b5dcdf21660806cb139943321
export default LoginForm
