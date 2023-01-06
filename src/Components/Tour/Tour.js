
import './Tour.css'

import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function Tour() {
    return (
        <>
            <Container className='container' fluid>
                <Row className='tour-row'>
                    <Col>
                        <Card className='tour-card' style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className='tour-title'>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted subtitle" >Card Subtitle</Card.Subtitle>
                                <Card.Img className='tour-img' style={{ width: '100%', margin: 'auto' }} variant="top" src="https://picsum.photos/200/200.jpg" />
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Show Details</Accordion.Header>
                                        <Accordion.Body>
                                            <p className='tour-description'>
                                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.   
                                            </p>
                                           
                                            <Row>
                                                <Col> <Button href="#">Book Now</Button></Col>
                                               
                                            </Row>
                                           
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                            <p className='tour-price'>price</p>
                        </Card> 
                    </Col>
                    <Col>
                        <Card className='tour-card' style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className='tour-title'>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted subtitle" >Card Subtitle</Card.Subtitle>
                                <Card.Img className='tour-img' style={{ width: '100%', margin: 'auto' }} variant="top" src="https://picsum.photos/200/200.jpg" />
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Show Details</Accordion.Header>
                                        <Accordion.Body>
                                            <p className='tour-description'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.
                                            </p>

                                            <Row>
                                                <Col> <Button href="#">Book Now</Button></Col>

                                            </Row>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                            <p className='tour-price'>price</p>
                        </Card>
                    </Col>
                </Row> 
            </Container>

        </>
    );
}

export default Tour;

