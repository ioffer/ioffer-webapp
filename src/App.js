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
  Link
} from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import VendorShop from './Pages/VendorShop'
import QuerryRun from './QuerryRun'
import ProfilePage from './Pages/ProfilePage'
import EditProfile from './Pages/EditProfile'

function App() {
  return (
    <div className="App">

      <Router>
        
      <PrimarySearchAppBar/>
      {/* <QuerryRun /> */}
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route path='/deals' component={Deals} />
          <Route path='/offers' component={Offers} />
          <Route path='/promotions'component={Promotions} />
          <Route path='/shops' component={Shops} />
          <Route path='/brands' component={Brands} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/vendorshop' component={VendorShop} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="edit-profile" component={EditProfile} />
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
      </Switch>
      </Router>
       
    </div>
  );
}

export default App;
