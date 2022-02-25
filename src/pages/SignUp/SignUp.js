import React from 'react'
import { Link } from 'react-router-dom';
import nodeApi from '../../apis/nodeApi';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import carLogo from  '../../car.png'


class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            plateNumber: '',
            password: '',
            validCredentials: ''
        }
    }
    onUserInput = (dataFromCustomInput) => {
         console.log('from input',dataFromCustomInput);
       if(dataFromCustomInput.id === 'firstName'){
            console.log('works')
            this.setState({firstName: dataFromCustomInput.value})
        }
        else if(dataFromCustomInput.id === 'lastName'){
            this.setState({lastName: dataFromCustomInput.value})
        }
        else if(dataFromCustomInput.id === 'plateNumber'){
            this.setState({plateNumber: dataFromCustomInput.value})
        }
        else if(dataFromCustomInput.id === 'email'){
            this.setState({email: dataFromCustomInput.value})
        }
        else if(dataFromCustomInput.id === 'password'){
            this.setState({password: dataFromCustomInput.value})
        }
        console.log('SIGN UP',this.state);
    }

    onSignUp = () => {
        console.log('BTN Clicked')
        // this.setState({validCredentials: true})
        nodeApi.post('/user/signup/',{
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            plateNumber: this.state.plateNumber
        }).then(res => {
            console.log(res)
            this.setState({validCredentials: true})
        });
        // nodeApi.get('/user').then(res => console.log(res));
    }

    render(){
        return (
        <div style={{textAlign: 'center'}}>
            <img src={carLogo}  alt='car'/>
             <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>
               Welcome to EasyParking..</p> 
            <Container>
                <Row>
                    <Col><CustomInput id='firstName' inputText='FirstName' onUserInput={this.onUserInput} /></Col>
                </Row>
                <Row>
                    <Col><CustomInput id='lastName' inputText='LastName' onUserInput={this.onUserInput} /></Col>
                </Row>
                <Row>
                    <Col><CustomInput id='email' inputText='Email' onUserInput={this.onUserInput} /></Col>
                </Row>
                    <Row>
                    <Col><CustomInput id='plateNumber' inputText='PlateNumber' onUserInput={this.onUserInput} /></Col>
                </Row>
                    <Row>
                    <Col><CustomInput id='password' inputText='Password' type='password' onUserInput={this.onUserInput} /></Col>
                </Row>
                    {/* needs better implementation of time selection here */}
                
                <Row>
                    <Col>
                        <Link to={this.state.validCredentials ? '/Home' : '/signup'}>
                            <CustomButton buttonText='Sign Up' onBtnClick={this.onSignUp}  /> 
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to='/'>
                            <p style={{color: '#000000'}}>Already have an account? <span style={{color: '#0d6efd'}}>Sign In</span></p> 
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    }
}

export default SignUp