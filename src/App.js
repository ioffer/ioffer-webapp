import PrimarySearchAppBar from './components/primarySearchAppBar'
import Home from './Pages/Home'
import Offers from './Pages/Offers'
import Deals from './Pages/Deals'
import Promotions from './Pages/Promotions'
import Shops from './Pages/Shops'
import Brands from './Pages/Brands'
import './styles/global.scss'
import {
  BrowserRouter as Router,Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import VendorShop from './Pages/VendorShop'
import ShowKyc from './Pages/ShowKyc'
import AddKyc from './Pages/AddKyc'
import {addkyc, login, selectUser,} from './redux/reducer/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import React  from 'react'
import Loader from "./components/Loader/loader";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import {useMe} from "./hooks/useQueriesHooks";
import ProfilePage from './Pages/ProfilePage'
import EditKyc from './Pages/EditKyc'
import {removeLocalStorage} from "./lib/services";


const options = {
  position: positions.TOP_CENTER,
  timeout: 10000,
  offset: '30px',
  transition: transitions.SCALE
}


const Root=({logged})=>{

  const user= useSelector(selectUser)
  logged=(!!user)||logged
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
          <Route path='/login'  component={()=>logged?<Redirect to={'/'}/>:<Login/>} />
          <Route path='/register' component={()=>logged?<Redirect to={'/'}/>:<Register/>}/>
          <Route path='/vendor_shop' component={VendorShop} />
          <Route path="/user_kyc" component={ShowKyc} />
          <Route path="/edit_kyc" component={EditKyc} />
          <Route path='/user_profile' component={ProfilePage} />
          <Route path='/edit_profile' component={AddKyc} />
          <Route path='/dashboard' components={Dashboard}/>
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
    if (error.message.includes('Authentication')){
      removeLocalStorage();
      return <Root logged={false}/>
    }
   return <div>{error.message}</div>
  }
  if (!loading&&data){
    dispatch(login(data.me))
    dispatch(addkyc(data.me.kyc))
    return <Root logged={true}/>
  }

}
function App() {

return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className="App">
        {localStorage.getItem('token') ? <UserRoot/> : <Root logged={false}/>}
      </div>
    </AlertProvider>
  );
}

export default App;
