import { Link } from 'react-router-dom';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import carLogo from  '../../car.png'

const Payment = () => {
    return (
        <div className='page'>
            <img src={carLogo}  alt='car'/>
             <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>
                Finish up booking...</p> 
            <Container className='page'>
                {/* needs a whole better approach accepting payment details */}
                <Row>
                    <Col><CustomInput inputText='Card Holder' /></Col>
                </Row>
                <Row>
                    <Col><CustomInput inputText='Card Number' /></Col>
                </Row>
                 {/* needs better implementation of time selection here */}
                <Row>
                    <Col><CustomInput inputText='expiry date' /></Col>
                    <Col><CustomInput inputText='cvv' /></Col>
                </Row>
                <Row>
                    <Col>
                    <Link to='/confirmation'>
                        <CustomButton buttonText='Confirm' /> 
                    </Link>
                   </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Payment
