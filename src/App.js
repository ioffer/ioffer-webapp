import PrimarySearchAppBar from './components/primarySearchAppBar'
import VarifyEmail from './components/VeryEmail'
import Home from './Pages/Home'
import Offers from './Pages/Offers'
import Deals from './Pages/Deals'
import Promotions from './Pages/Promotions'
import Shops from './Pages/Shops'
import Brands from './Pages/Brands'
import './styles/global.scss'
import {BrowserRouter as Router,Redirect,Switch,Route,} from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import VendorShop from './Pages/VendorShop'
import ShowKyc from './Pages/ShowKyc'
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
import OptCodePage from './Pages/OptCodePage'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import VerifyEmailPassword from './components/VerifyEmailPassword'
import CreatePromotionForm from './components/CreatePromotionForm'
import DisplayAllShop from './components/DisplayAllSops'
import EnterYourShop from './components/EnterYourShop'
import ShowPromotion from './components/ShowPromotion'

const options = {
  position: positions.TOP_CENTER,
  timeout: 10000,
  offset: '30px',
  transition: transitions.SCALE
}


const Root=({logged})=>{
  const user= useSelector(selectUser)
  console.log(window.location.pathname.includes('/user/confirm'))
  logged=(!!user)||logged
  return(
      <Router>
         {!window.location.pathname.includes('/user/confirm')&&<PrimarySearchAppBar/>}
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
          <Route path='/otp_code' component={OptCodePage} />
          <Route path='/user_profile' component={ProfilePage} />
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/user/confirm/:token' component={VarifyEmail}/>
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path='/verify-email' component={VerifyEmailPassword} />
          <Route path="/user/reset-password/:token" component={ResetPassword}/>
          <Route path='/promotion/:shopid' component={CreatePromotionForm} />
          <Route path='/shop_data/:id' component={EnterYourShop} />
          <Route path="/all_shops/:addShop" component={DisplayAllShop} />
          <Route path="/show-promotion" component={ShowPromotion} />
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
