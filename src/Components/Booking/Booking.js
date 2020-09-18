import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Booking.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link, useParams } from 'react-router-dom';
import places from '../../fakeData/fake';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'no-wrap',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    border: "1px solid gray",
    backgroundColor: "#F2F2F2F2"
  },
}));
const Booking = () => {
    const {nameOfPlace} = useParams();
    const selectedPlace = places.find(place=> place.placeName===nameOfPlace);
    const{placeName,description} = selectedPlace;

    const classes = useStyles();
    return (
        <div className="booking" style={{marginTop:"100px"}}>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={6}>
                        <h1>{placeName}</h1>
                        <p>{description}</p>
                    </Col>
                    <Col md={6} >
                        <Card style={{width:"380px"}} className="m-auto">
                            <Card.Body >
                                <label htmlFor="origin">Origin</label> 
                                <br/>
                                <input type="text" name="origin" id="" value="Dhaka"/>
                                <br/>
                                <label htmlFor="destination">Destination</label>
                                <br/>
                                <input type="text" name="origin" id="" value={placeName}/>
                                <br/>
                                <br/>
                                <div className="calender d-flex"> 
                                    <div>
                                        <form className={classes.container} noValidate>
                                            <TextField
                                                id="datetime-local"
                                                label="From"
                                                type="date"
                                                defaultValue="09/01/2020"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                            />
                                        </form>
                                    </div>
                                    <div> 
                                        <form className={classes.container} noValidate>
                                                <TextField
                                                    id="datetime-local"
                                                    label="To"
                                                    type="date"
                                                    defaultValue="09/09/2020"
                                                    className={classes.textField}
                                                    InputLabelProps={{
                                                    shrink: true,
                                                    }}
                                                />
                                        </form>
                                    </div>
                                </div>
                                <br/>
                                <Link to="/hotel"> <Button variant="primary">Start Booking</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;