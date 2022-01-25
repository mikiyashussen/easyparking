import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './FoundPlaces.css'

const FoundPlaces = ({location, freeSpaces, cost}) => {
    return (
        <div className='foundPlacesCard'>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <p>{location}</p>
                            <p>free-spaces: {freeSpaces}</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p>{cost}PLN</p>
                            <p>5min</p>
                        </div>
                    </Col>
                    <Col>
                    <Link to='/payment'>
                        <CustomButton buttonText='Book' />
                    </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FoundPlaces;
