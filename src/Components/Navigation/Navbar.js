import '../Navigation/Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Routes, Route, Link } from "react-router-dom"
import ContactComponent from '../ContactComponent';
import AboutComponent from '../AboutComponent';
import HomeComponent from '../HomeComponent';
import CreateTourComponent from '../Tour/CreateTourComponent';
import TourListComponent from '../Tour/TourListComponent';
import LoginComponent from '../Auth/LoginComponent';
import RegisterComponent from '../Auth/RegisterComponent';

// fixed="top"

function NavigationComponent() {
    return (
        <>
            <div >
                <Navbar expand="lg" className='nav-container sticky-nav'  >
                    <Container fluid>
                        <Nav>
                            <Nav.Link as={Link} to={'/home'} className="titel-link">Travel Market</Nav.Link>
                        </Nav>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to={'/home'} className="link">Home</Nav.Link >
                                <Nav.Link as={Link} to={'/contact'} className="link">Contact</Nav.Link>
                                <Nav.Link as={Link} to={'/about'} className="link">About</Nav.Link>
                                <Nav.Link as={Link} to={'/login'} className="link">Login</Nav.Link>
                                <Nav.Link as={Link} to={'/register'} className="link">Register</Nav.Link>
                                
                                <DropdownButton
                                    align="end"
                                    title="Tours"
                                    id="dropdown-menu-align-end"
                                    className='dropdown-btn'
                                >
                                    <NavDropdown.Item as={Link} to={'/create'} className='dropdown-content'>Create Tour</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/all-tours'} className='dropdown-content'>All Tours</NavDropdown.Item>

                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4" className='dropdown-content'>Separated link</Dropdown.Item>
                                </DropdownButton>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button className='searchBtn'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>


                </Navbar>
                <Routes>
                    <Route path="/home" element={<HomeComponent />} />
                    <Route path="/about" element={<AboutComponent />} />
                    <Route path="/contact" element={<ContactComponent />} />
                    <Route path="/create" element={<CreateTourComponent />} />
                    <Route path="/all-tours" element={<TourListComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/register" element={<RegisterComponent />} />

                </Routes>
            </div>
        </>

    );
}

export default NavigationComponent;


