import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Logo.png';
import './Header.css'
const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <Container>
            <Navbar bg="transparent" variant="outline-secondary">
                <Navbar.Brand> <img src={logo} alt="" style={{width:'70px',height:'40px',border:"none" }}/></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />
                </Form>
                <Nav className="ml-auto">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/destination">Destination</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    {
                        loggedInUser.email ? <Button onClick={()=>setLoggedInUser({})}>Sign Out</Button>
                                     :<Link to="/login"><Button>Login</Button></Link>
                    }
                </Nav>
            </Navbar>
        </Container>
    );
};

export default Header;