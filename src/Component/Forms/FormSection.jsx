import React from 'react';
import { Form, Col, Button } from 'react-bootstrap'
export const FormSection = () => {
    return (
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Middle Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPasswordName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" placeholder="Gender" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Age" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCast">
                        <Form.Label>Cast</Form.Label>
                        <Form.Control type="text" placeholder="Cast" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="text" placeholder="Weight" />
                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        </div >
    );
};

