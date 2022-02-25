import React from 'react'
import { Link } from 'react-router-dom';
import javaApi from '../../apis/javaApi';
import nodeApi from '../../apis/nodeApi';

import axios from 'axios';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import carLogo from  '../../car.png'


class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            validCredentials: false
        }
    }
    onUserInput = (dataFromCustomInput) => {
        console.log('from input',dataFromCustomInput);
       if(dataFromCustomInput.id === 'email'){
            console.log('works')
            this.setState({email: dataFromCustomInput.value})
        }
        else if(dataFromCustomInput.id === 'password'){
            this.setState({password: dataFromCustomInput.value})
        }
        console.log('SIGN IN',this.state);
    }

    onSignIn = () => {
        console.log('BTN Clicked')
        // this.setState({validCredentials: true})
        nodeApi.post('/user/login/',{
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            console.log(res)
            this.setState({validCredentials: true})
        });
        // nodeApi.get('/user').then(res => console.log(res));
    }


    render(){
        return (
        <div className='page' style={{ height: '100vh', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
             <img src={carLogo}  alt='car'/>
             <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>
               Welcome to EasyParking..</p> 
            <Container >
                <Row>
                    <Col><CustomInput id='email' inputText='Email' onUserInput={this.onUserInput} /></Col>
                </Row>
                <Row>
                    <Col><CustomInput id='password' inputText='Password' onUserInput={this.onUserInput} /></Col>
                </Row>
                    {/* needs better implementation of time selection here */}
                
                <Row>
                    <Col>
                    <Link to={this.state.validCredentials ? '/Home' : '/'}>
                        <CustomButton buttonText='Sign In' onBtnClick={this.onSignIn}  /> 
                    </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Link to='/signup'>
                        <p style={{color: '#000000'}}>don't have an account? <span style={{color: '#0d6efd'}}>Sign Up</span></p> 
                    </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    }
}

export default SignIn;