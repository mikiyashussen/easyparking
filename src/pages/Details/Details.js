import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import carLogo from  '../../car.png'

const Details = () => {
    return (
        <div className='page'>
            <img src={carLogo}  alt='car'/>
             <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>
                Please fill in the following details</p> 
            <Container className='page'>
                <Row>
                    <Col><CustomInput inputText='Full Name' /></Col>
                </Row>
                <Row>
                    <Col><CustomInput inputText='Email' /></Col>
                </Row>
                <Row>
                    <Col><CustomInput inputText='Car Plate' /></Col>
                </Row>
                 {/* needs better implementation of time selection here */}
                <Row>
                    <Col><CustomInput inputText='From' /></Col>
                    <Col><CustomInput inputText='To' /></Col>
                </Row>
                <Row>
                    <Col><CustomButton buttonText='Search' /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Details
