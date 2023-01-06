import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import HomeComponent from './HomeComponent';
import CreateTourComponent from './Tour/CreateTourComponent';
import TourListComponent from './Tour/TourListComponent';

function NavigationComponent() {
    return (
        <>
    <Navbar fixed="top" bg="dark" variant={'dark'} className="mb-3">
                <Container fluid>
                    <Navbar.Brand as={Link} to={'/home'}>Travel Market</Navbar.Brand>

                    <Navbar.Offcanvas placement="end">

                        <Offcanvas.Header closeButton>Travel Market</Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                                <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
                                <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                                <NavDropdown title="Tours" >

                                    <NavDropdown.Item as={Link} to={'/create'}>Create Tour</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/all-tours'}>
                                        All Tours
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/home" element={<HomeComponent />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/contact" element={<ContactComponent />} />
                <Route path="/create" element={<CreateTourComponent />} />
                <Route path="/all-tours" element={<TourListComponent />} />

            </Routes>
        </>
    );
}
export default NavigationComponent;