import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton';

import carLogo from  '../../car.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Confirmation.css';

const Confirmation = ({selectedLocation}) => {
    console.log('confirmation',selectedLocation)
    // const location = 
    // const onShowRoute = () => {
    //     window.redirect('https://www.google.com/maps/place/Nowogrodzka+27')
    // }
  return <div className='confirmationPage'>
            <img src={carLogo} style={{ height: '12em', width:'12em'}}  alt='car'/>
            <div style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>
                    <p >
                Booking Succesful</p>
                <p>You ticket number is</p>
                <p>#23986893  </p>
            </div>    
             
            <Container>
                <Row>
                    <Col style={{width: '15em'}} >
                        {/* <CustomButton buttonText='show route' onBtnClick={onShowRoute}/> */}
                        <a style={{ textDecoration: 'none'}} href={`https://www.google.com/maps/place/${selectedLocation}`}>Show Route</a>
                    </Col>
                </Row>
            </Container>
  </div>;
};

export default Confirmation;
