import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Places = (props) => {
    console.log(props.place);
    const {placeName,description,picture} = props.place;
    return (
        
            <Col md={4}>
                <Card style={{ width: '18rem' , backgroundColor:"gray" }}>
                    <Card.Img style={{height:'300px'}} variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{placeName}</Card.Title>
                        <Card.Text>
                        {description}
                        </Card.Text>
                        <Link to={'/booking/'+ placeName}><Button variant="primary">Booking</Button></Link>    
                    </Card.Body>
                </Card>
            </Col>
    );
};

export default Places;