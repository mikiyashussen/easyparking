import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';


import carLogo from  '../../car.png'
class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [],
            text: ''
        }
    }
     onSearchLocation = async () => {
        console.log('BTN clicked')
        //  await axios.get('http://142.93.48.212/api/sort/duration',{
        //      params: {
        //         location: this.state.text
        //     }
        // }).then(res => {
        //     console.log('res home',res)
        //    this.setState({data: res.data})});
        // console.log(this.state.text)
        this.props.getLocations(this.state.text);
    }
     onUserInput = (input) => {
        console.log('user input',input)
        // need to pass this to app then to locations then to 
        this.setState({text: input})
        // custominput to make it default value

    }
    render(){
    return(
        <div className='homepage page'> 
            <img src={carLogo}  alt='car'/>
            <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>Looking for a parking spot?</p> 
            <CustomInput onUserInput={this.onUserInput} inputText='Enter Location'/>
            <Link to='/locations'>
                <CustomButton onBtnClick={this.onSearchLocation} buttonText='Search'/>
            </Link>
        </div>
    )
    }
}

export default Home;