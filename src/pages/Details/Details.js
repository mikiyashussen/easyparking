import { useState } from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import nodeApi from '../../apis/nodeApi';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import carLogo from  '../../car.png'

const Details = () => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');



     const onUserInput = (input) => {
        console.log('user input',input)
        if(input.id == 'startTime'){
            setStartTime(input.value)
        } else if(input.id == 'startTime'){
            setEndTime(input.value)}
        // need to pass this to app then to locations then to 
        // this.setState({text: input})
        // custominput to make it default value
    }

    const onNext = () => {
        console.log('Next BTN Clicked')
        // this.setState({validCredentials: true})
        nodeApi.post('/user/time/',{
            startTime: startTime,
            endTime: endTime
        }).then(res => {
           console.log('time registered')
        });
        // nodeApi.get('/user').then(res => console.log(res));
    }
    return (
        <div className='page'>
            <img src={carLogo}  alt='car'/>
             <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>
               The time you want to park?</p> 
            <Container className='page'>
                 {/* needs better implementation of time selection here */}
                <Row>
                    <Col><CustomInput onUserInput={onUserInput} id='startTime' inputText='From' /></Col>
                    <Col><CustomInput onUserInput={onUserInput} id='endTime' inputText='To' /></Col>
                </Row>
                <Row>
                    <Col>
                      <Link to="/payment">
                          <CustomButton buttonText='Next' onBtnClick={onNext} />
                    </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Details
