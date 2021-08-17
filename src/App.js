import PrimarySearchAppBar from './components/primarySearchAppBar'
import Home from './Pages/Home'
import Offers from './Pages/Offers'
import Deals from './Pages/Deals'
import Promotions from './Pages/Promotions'
import Shops from './Pages/Shops'
import Brands from './Pages/Brands'
import './styles/global.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import VendorShop from './Pages/VendorShop'
import ProfilePage from './Pages/ProfilePage'
import EditProfile from './Pages/EditProfile'
import {login, } from './redux/reducer/userSlice'
import {useDispatch} from 'react-redux'
import React  from 'react'
import Loader from "./components/Loader/loader";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import {useMe} from "./hooks/useQueriesHooks";
const options = {
  position: positions.TOP_CENTER,
  timeout: 10000,
  offset: '30px',
  transition: transitions.SCALE
}


const Root=()=>{
  return(
      <Router>
        <PrimarySearchAppBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/deals' component={Deals} />
          <Route path='/offers' component={Offers} />
          <Route path='/promotions' component={Promotions} />
          <Route path='/shops' component={Shops} />
          <Route path='/brands' component={Brands} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/vendorshop' component={VendorShop} />
          <Route path="/profile" component={ProfilePage} />
          <Route path='/editprofile' component={EditProfile} />
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
  )
}
const UserRoot=()=>{
  const { data, loading,error } =useMe()
  const dispatch= useDispatch()
  if (loading){
    return <Loader/>
  }
  if (error){
    console.log(error)
  }
  if (!loading&&data){
    dispatch(login(data.me))
    return <Root/>
  }

}
function App() {



  return (
      <AlertProvider template={AlertTemplate} {...options}>
        <div className="App">
          {localStorage.getItem('token') ? <UserRoot/> : <Root/>}
        </div>
      </AlertProvider>
  );
}

export default App;
