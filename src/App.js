import Header from './components/header'
import PrimarySearchAppBar from './components/primarySearchAppBar'
import ButtonBases from './components/complexButton'
import SingleLineGridList from './components/cardsSlider'
import FoodLineGridList from './components/foodSlider'
import FashionGridList from './components/fashionSlider'
import DealSlider from './components/dealSlider'
import SecondDealSlider from './components/SecondDealSlider'
import AllDeals from './components/AllDeals'
import OfferSlider from './components/offers'
import Catogeryicons from './components/catogeryicons'
import AllShops from './components/shop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/global.scss'
import NearbyOffer from './components/NearbyOffer'
import AllOffer from './components/AllOffer'
import Promotion from './components/promotion'
import HeroImage from './components/HeroImage'

function App() {
  return (
    <div className="App">
      <Router>
      <PrimarySearchAppBar/>
        <Switch>
          <Route exact path='/'>
            <HeroImage />
          <ButtonBases/>
          <SingleLineGridList/>
          <FoodLineGridList/>
          <FashionGridList />
          </Route>

          <Route path='/deals'>
          <DealSlider />
          <SecondDealSlider />
          <AllDeals />
          </Route>

          <Route path='/offers'>
            <Catogeryicons />
            <OfferSlider />
            <NearbyOffer />
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
