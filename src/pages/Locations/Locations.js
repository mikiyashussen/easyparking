import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import FoundPlaces from '../../components/FoundPlaces/FoundPlaces';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import carLogo from  '../../car.png'



const Locations = () => {
    return (
        <div className='page'>
            {/* <img src={carLogo}  alt='car' style={{ height: '10em'}}/> */}
            
            <Container>
                <Row style={{ margin: '1em 0 1.5em 0'}}>
                    <Col sm={8}><CustomInput inputText='Enter Location' /></Col>
                    <Col sm={4}><CustomButton buttonText='Search' /></Col>
                </Row>
                <Row>
                    <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>
                        We found some places for you...</p> 
                </Row>
                <Row>
                    <Col><FoundPlaces /></Col>
                </Row>
                 <Row>
                    <Col><FoundPlaces /></Col>
                </Row> <Row>
                    <Col><FoundPlaces /></Col>
                </Row> <Row>
                    <Col><FoundPlaces /></Col>
                </Row> <Row>
                    <Col><FoundPlaces /></Col>
                </Row> <Row>
                    <Col><FoundPlaces /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Locations
