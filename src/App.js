import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from  './pages/Details/Details'
import Locations from './pages/Locations/Locations';

import CustomButton from './components/CustomButton/CustomButton';
import CustomInput from './components/CustomInput/CustomInput';

import carLogo from  './car.png'
import './App.css';


function App() {
  const testBool = true;
  return (
    <Router>
      {/* <div className="App">
      {
        testBool ? (
          <div className='homepage page'> 
            <img src={carLogo}  alt='car'/>
            <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>Looking for a parking spot?</p> 
            <CustomInput inputText='Enter Location'/>
            <CustomButton buttonText='Search'/>
      </div>) : 
      (
        <Details className="page"/>
      )
      }
    </div> */}
    <Switch>
      <Route exact path='/'>
        <div className='App'>
          <div className='homepage page'> 
            <img src={carLogo}  alt='car'/>
            <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>Looking for a parking spot?</p> 
            <CustomInput inputText='Enter Location'/>
            <CustomButton buttonText='Search'/>
        </div>
        </div>
      </Route>
      <Route path='/details'>
      <div className="App">
        <Details />
      </div>
      </Route>
      <Route path='/locations'>
      <div className="App">
        <Locations />
      </div>
      </Route>
    </Switch>
    </Router>
    
  );
}

export default App;
