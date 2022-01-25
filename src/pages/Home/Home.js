import React from 'react'
import { Link } from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';


import carLogo from  '../../car.png'

const Home = ({getLocations}) => {

    const onSearchLocation = async () => {
        const locations = await fetch('').json();
        getLocations(locations);
    }
    const onUserInput = (input) => {
        console.log(input)
        // need to pass this to app then to locations then to 

        // custominput to make it default value

    }
    return(
        <div className='homepage page'> 
            <img src={carLogo}  alt='car'/>
            <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>Looking for a parking spot?</p> 
            <CustomInput onUserInput={onUserInput} inputText='Enter Location'/>
            <Link to='/locations'>
                <CustomButton onBtnClick={onSearchLocation} buttonText='Search'/>
            </Link>
        </div>
    )
}

export default Home;