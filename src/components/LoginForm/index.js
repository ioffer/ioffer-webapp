import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import google from '../../assets/images/google.png'
import './login-form.scss'
import {Link} from 'react-router-dom'
import {gql,  useMutation, useQuery } from '@apollo/client'
import { useHistory } from 'react-router';
import {ApolloClient,  ApolloProvider, InMemoryCache} from "@apollo/client";


const login= gql`
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

 function LoginForm() {
  const history = useHistory();
  const [state, setState ] = useState({
    userName: "",
    password:""
})
const handelChange = (name, value) => {
  setState({...state, [name]: value})
}
const submitForm=(e)=>{
  e.preventDefault()
  const loginUser=  client.query({
    query:login,
    variables:{
      userName: state.userName,
      password: state.password
    }
  })
  history.push('/')
  }

// const { loading, error, data } = useQuery(login);
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;
    return (
        <div className="all-item-alighn">
          <h1 className="h1"> Sign in to ioffer</h1>
          
          <div className="button-postion">
            <div className="facebook icon-flex">
              <img src={google} width="30px" height="30px" />
              <p>Login with Google</p>
            </div>
            </div>
            <div className="all-item-alighn">
             <form className="form-design" autoComplete="off" onSubmit={submitForm}>
             <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            onChange={(e) => handelChange('userName', e.target.value)}
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
  uri: 'http://192.168.1.15:4000/graphql',
  cache: new InMemoryCache()
});
export default LoginForm
