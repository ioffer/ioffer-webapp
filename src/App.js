import Header from './components/header'
import PrimarySearchAppBar from './components/primarySearchAppBar'
import ButtonBases from './components/complexButton'
import SingleLineGridList from './components/cardsSlider'
import AllDeals from './components/AllDeals'
import Catogeryicons from './components/catogeryicons'
import AllShops from './components/AllShops'
import './styles/global.scss'
import AllOffer from './components/AllOffer'
import Promotion from './components/promotion'
import HeroImage from './components/HeroImage'
import {fashionData,electronicsData,FoodData,dealData,SecondDeal,PopularOffer, near} from "./data.js"
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import DevicesIcon from '@material-ui/icons/Devices';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import StoreIcon from '@material-ui/icons/Store';
import MovingIcon from './components/MovingIcon'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <PrimarySearchAppBar/>

        <Switch>
          <Route exact path='/'>
            <HeroImage />
            <MovingIcon />
            <ButtonBases/>
            <SingleLineGridList title ="Electronics" array={electronicsData} icon={<DevicesIcon/>} />
            <SingleLineGridList  title="Restaurant" array={FoodData} icon={<FastfoodIcon/>}/>
            <SingleLineGridList title="Fashion" array={fashionData} icon={<StoreIcon/>}/>
          </Route>

          <Route path='/deals'>
            <SingleLineGridList title="Upto 30% Off" array={dealData} icon={<LocalOfferIcon/>} />
            <SingleLineGridList title="Upto 50% Off" array={SecondDeal} icon={<LocalOfferIcon/>} />
            <AllDeals />
          </Route>

          <Route path='/offers'>
            <Catogeryicons />
            <SingleLineGridList title="Popular Offers" array={PopularOffer}  icon={<LoyaltyIcon/>}/>
            <SingleLineGridList title="NearBy Offers" array={near} icon={<LoyaltyIcon/>}/>
            <AllOffer />
          </Route>

          <Route path='/promotions'>
            <Catogeryicons />
            <Promotion />
          </Route>

          <Route path='/shops'>
            <Catogeryicons />
            <AllShops />
          </Route>
          
          <Route path='/brands'>
            <HeroImage />
            <Catogeryicons />
          </Route>

        </Switch>
      </Router>
        {/* <Header/> */}
       
        
    </div>
  );
}

export default App;
