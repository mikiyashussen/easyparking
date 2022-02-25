import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import Details from  './pages/Details/Details'
import Locations from './pages/Locations/Locations';
import Payment from './pages/Payment/Payment';



import './App.css';
import Confirmation from './pages/Confirmation/Confirmation';
// to dos
  /*
    1. find better font style
    2. do sth with the color
    3. figure how to make API requests , use react hooks , useEffect or sth
    4. adding marign and padding to bootstrap container?
    5. find better image or make animations to it
    6. research on better ways to accept date/time from user
    7. there should be a better way for the payment detail - 
    8. build the confirmation page
    
    */
  const testBool = true;

class App extends React.Component {
  // const testBool = true;
  constructor(){
    super();
    this.state = {
      userLocation: {}
    }
  }

  getLocations = (locations) => {
    console.log('locations', locations)
    this.setState({userLocation: locations})
  }

  render(){
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
            <SignIn getLocations={this.getLocations}/>
          </div>
        </Route>
         <Route  path='/signup'>
          <div className='App'>
            <SignUp getLocations={this.getLocations}/>
          </div>
        </Route>
        <Route  path='/home'>
          <div className='App'>
            <Home getLocations={this.getLocations}/>
          </div>
        </Route>
        <Route path='/details'>
          <div className="App">
            <Details />
          </div>
        </Route>
        <Route path='/locations'>
          <div className="App">
            <Locations getLocations={this.getLocations} 
            locations={this.state.userLocation}/>
          </div>
        </Route>
        <Route path='/payment'>
          <div className="App">
            <Payment />
          </div>
        </Route>
        <Route path='/confirmation'>
          <div className="App">
            <Confirmation />
          </div>
        </Route>
      </Switch>
      </Router>
      
    );
  }
}

export default App;
