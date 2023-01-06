import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


import './RegisterComponent.css'

const RegisterComponent = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };



    return (
        <>

            <div className="form-container">
                <h1>Register</h1>


                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01" className='form-group'>
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>

                                <FloatingLabel controlId="floatingPassword" label="Email">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email.
                                    </Form.Control.Feedback>

                                </FloatingLabel>


                            </InputGroup>
                        </Form.Group>





                        <Form.Group as={Col} md="4" controlId="validationCustom02" className='form-group'>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                // defaultValue="Otto"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid password.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>


                    </Row>


                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        </>

    );
}

export default RegisterComponent;