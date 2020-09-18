import React from 'react';
import './Home.css'
import places from '../../fakeData/fake';
import { Container, Row } from 'react-bootstrap';
import Places from '../Places/Places';


const Home = () => {
    const visitingPlaces = places.slice(0,3);
    
    return (
        <div>
            <Container>
                <Row>
                    {
                        visitingPlaces.map(place=> <Places place={place}></Places>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;