import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Light from '../../Image/Rectangle 26.png'
import Apartment from '../../Image/Rectangle 27.png'
import Ar from '../../Image/Rectangle 28.png'
import './HotelRoom.css'
import star from '../../Icon/star_1_.png'
import Map from '../GoogleMap/Map';


const HotelRoom = () => {
    return (
        <div className="hotel">
            <Container> 
                <Row> 
                    <Col md={6}> 
                        <p>252 stays April 13-17,3guests</p>
                        <h3>Stay in Cox's Bazar</h3>
                        <Row> 
                            <Col md={6}> 
                                <img src={Light} alt=""/>
                            </Col>
                            <Col md={6}> 
                                <h6>Light bright airy stylish apt and safe peaceful stay</h6>
                                <p><small style={{color:"gray"}}>4 guests  2 bedrooms  2 beds  2 baths</small> </p>
                                <p><small style={{color:"gray"}}>Wifi Air Conditioning Kitchen</small> </p>
                                <p><small style={{color:"gray"}}>Cancellation Flexibility Available</small> </p>
                                <p><img style={{width:"15px",height:"15px",border:"none"}} src={star} alt=""/><small style={{color:"gray",}}>4.9(20)  $34/Night <small>$167 total</small> </small> </p>

                            </Col>
                            <Col md={6}>
                                <img src={Apartment} alt=""/>
                            </Col>
                            <Col md={6}> 
                            <h6>Apartment in lost panoroma</h6>
                                <p><small style={{color:"gray"}}>4 guests  2 bedrooms  2 beds  2 baths</small> </p>
                                <p><small style={{color:"gray"}}>Wifi Air Conditioning Kitchen</small> </p>
                                <p><small style={{color:"gray"}}>Cancellation Flexibility Available</small> </p>
                                <p><img style={{width:"15px",height:"15px",border:"none"}} src={star} alt=""/><small style={{color:"gray",}}>4.8(10)  $52/Night <small>$167 total</small> </small> </p>
                            </Col>
                            <Col md={6}> 
                                <img src={Ar} alt=""/>
                            </Col>
                            <Col md={6}> 
                            <h6>AR lounge & pool (r&r + b&b)</h6>
                                <p><small style={{color:"gray"}}>4 guests  2 bedrooms  2 beds  2 baths</small> </p>
                                <p><small style={{color:"gray"}}>Wifi Air Conditioning Kitchen</small> </p>
                                <p><small style={{color:"gray"}}>Cancellation Flexibility Available</small> </p>
                                <p><img style={{width:"15px",height:"15px",border:"none"}} src={star} alt=""/><small style={{color:"gray",}}>4.9(25)  $42/Night <small>$167 total</small> </small> </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}> 
                        <Map></Map>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HotelRoom;