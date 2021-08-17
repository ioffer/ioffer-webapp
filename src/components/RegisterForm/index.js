import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'
import google from '../../assets/images/google.png'
import './register-form.scss'
import {gql, useMutation } from '@apollo/client'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { login } from '../../redux/reducer/userSlice';

const register= gql`
mutation ($name:String!, $userName: String!, $email:String!, $password:String!){
  registerUser(newUser: {fullName: $name, userName: $userName, email: $email, password: $password}) {
    token
    user {
      id
    }
  }
}

`;
function RegisterForm() {
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

 const handelChange = (name, value) => {
     setState({...state, [name]: value})
}

const submitForm=(e)=>{
  e.preventDefault()
  registerUser({
    variables:{
      name: state.fname,
      userName: state.userName,
      email: state.email,
      password: state.password
    }
  })
 dispatch(login({
  variables:{
    name: state.fname,
    userName: state.userName,
    email: state.email,
    password: state.password
  }
}))
console.log(login)
  history.push('/login')
 }
    return (
      <div className="all-item-alighn">
              <h1 className="h1"> Get started absolutely free.</h1>
              <p>Free forever. No credit card needed.</p>

                <div className="button-postion">
            <div className="facebook icon-flex">
              <img src={google} width="30px" height="30px" />
              <p>Login with Google</p>
            </div>

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

          <TextField
            fullWidth
            autoComplete="current-password"
            type="password"
            label="Password"
            onChange={(e) => handelChange('password', e.target.value)}
            value={state.password}
          />

            <FormControlLabel
            control={<Checkbox />}
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
