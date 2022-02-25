import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import nodeApi from '../../apis/nodeApi';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './FoundPlaces.css'

const FoundPlaces = ({location, freeSpaces, cost, durationInMin}) => {



    const onBook = () => {
        console.log('Book btn clicked')
         nodeApi.post('/user/book/',{
           location: location
        }).then(res => {
           console.log('time registered')
        });
    }
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
                            <p>{durationInMin}</p>
                        </div>
                    </Col>
                    <Col>
                    <Link to='/payment'>
                        <CustomButton buttonText='Book' onBtnClick={onBook}/>
                    </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FoundPlaces;
