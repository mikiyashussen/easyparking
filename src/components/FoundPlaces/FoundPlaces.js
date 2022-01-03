import CustomButton from '../CustomButton/CustomButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './FoundPlaces.css'

const FoundPlaces = () => {
    return (
        <div className='foundPlacesCard'>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <p>Polwieska</p>
                            <p>61-001 Poznan</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p>2.5km</p>
                            <p>5min</p>
                        </div>
                    </Col>
                    <Col><CustomButton buttonText='Book' /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default FoundPlaces;
