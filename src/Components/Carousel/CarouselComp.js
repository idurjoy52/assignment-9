import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

const CarouselComp = (props) => {
    const{placeName,description,picture} = props.place;
    console.log(props)
    return (
        <Carousel.Item>
                        <Row className="d-flex align-items-center">
                            <Col md={6}>
                                <h1>{placeName}</h1>
                                <p>{description}</p>
                                <button>Booking</button>
                            </Col>
                            <Col md={6}>
                                <img
                                className=" w-100"
                                src={picture}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{placeName}</h3>
                                </Carousel.Caption>
                            </Col>
                        </Row>
    
        </Carousel.Item>

    );
};

export default CarouselComp;