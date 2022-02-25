import  React from 'react';
import nodeApi from '../../apis/nodeApi'

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import FoundPlaces from '../../components/FoundPlaces/FoundPlaces';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import carLogo from  '../../car.png'

/*
    loop through locations send from APP.js and map found elements component
*/ 
const locationsArray = [{
  "_id": {
    "$oid": "61e878d13894187b10fed613"
  },
  "location": "ul. Nowogrodzka 27",
  "free-spaces": 50,
  "max-space": 50,
  "cost": 10,
  "availability": true
},{
  "_id": {
    "$oid": "61e87baf3894187b10fed616"
  },
  "location": "ul. św. Barbary 62",
  "free-spaces": 30,
  "max-space": 30,
  "cost": 10,
  "availability": true
},{
  "_id": {
    "$oid": "61edbba03894187b10fed618"
  },
  "location": "Plac Defilad 1",
  "free-spaces": 260,
  "max-space": 260,
  "cost": 10,
  "availability": true
},{
  "_id": {
    "$oid": "61edbc1c3894187b10fed619"
  },
  "location": "ul. Nowogrodzka 51",
  "free-spaces": 35,
  "max-space": 35,
  "cost": 3,
  "availability": true
},{
  "_id": {
    "$oid": "61edbc883894187b10fed61a"
  },
  "location": "Pałac Kultury i Nauki",
  "free-spaces": 780,
  "max-space": 780,
  "cost": 5,
  "availability": true
},{
  "_id": {
    "$oid": "61edbd0c3894187b10fed61c"
  },
  "location": "ul. Emilii Plater 26",
  "free-spaces": 80,
  "max-space": 80,
  "cost": 4,
  "availability": true
}]
class Locations extends React.Component {
    //const [loaded, toggleLoaded] = useState(false)
    constructor(){
        super();
        this.state = {
            isLoaded: false,
            locations: [],
            userLocation: ''
        }
    }

     onSearchLocation =  () => {
        nodeApi.get('/api/sort/duration',{
             params: {
                location: this.state.userLocation
            }
        }).then(res => {
            console.log('res location',res)
           this.setState({locations: res.data, isloaded: true})});
    }
     onUserInput = (input) => {
        console.log(input)
        this.setState({userLocation: input})
        // need to pass this to app then to locations then to 
        // custominput to make it default value
    }
    componentDidMount(){
          nodeApi.get('/api/sort/duration',{
             params: {
                location: this.props.locations
            }
        }).then(res => {
            console.log('res location',res)
           this.setState({locations: res.data, isloaded: true})});
    }
    render(){
    return (
        <div className='page'>
            {/* <img src={carLogo}  alt='car' style={{ height: '10em'}}/> */}
            
            <Container>
                <Row style={{ margin: '1em 0 1.5em 0'}}>
                    <Col sm={8}><CustomInput onUserInput={this.onUserInput} inputText='Enter Location' /></Col>
                    <Col sm={4}><CustomButton onBtnClick={this.onSearchLocation} buttonText='Search' /></Col>
                </Row>
                <Row>
                    <p style={{color: '#3C8CBF', fontWeight: '600', fontSize: '1.5em'}}>
                        We found some places for you...</p> 
                </Row>
                {
                    true ?
                   ( this.state.locations.map(item => {
                        return (
                            <Row style={{textAlign: 'center'}}>
                                <Col>
                                    <FoundPlaces 
                                        location={item.location}
                                        freeSpaces={item["free-spaces"]}
                                        cost={item.cost}
                                        durationInMin={item.durationInMin}
                                        key={item.location}
                                 /></Col>
                            </Row>)
                        })
                     ) : 'Loading'
                }
            
            </Container>
        </div>
    )
            }
}

export default Locations
