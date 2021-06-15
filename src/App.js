import Header from './components/header'
import PrimarySearchAppBar from './components/primarySearchAppBar'
import ButtonBases from './components/complexButton'
import SingleLineGridList from './components/cardsSlider'
import './styles/global.scss'
function App() {
  return (
    <div className="App">
        {/*<Header/>*/}
        <PrimarySearchAppBar/>
        <ButtonBases/>
        <SingleLineGridList/>
    </div>
  );
}

export default App;
