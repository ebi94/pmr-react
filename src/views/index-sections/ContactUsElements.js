import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";

// core components
import GoogleMaps from '../../components/GoogleMaps/IndexGoogleMaps.js';

function ContactUsElements() {
  return (
    <>
        <div className="section section-basic" id="basic-elements">
            <Container>
                <h2 className="title">Contact Us</h2>
                <div>
                    <Row>
                        <Col lg="6" sm="12" className="footer-list-item">
                        <Form>
                            <FormGroup>
                                <label htmlFor="inputName">Name</label>
                                <Input
                                    id="inputName"
                                    placeholder="Name"
                                    type="text"
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="inputPhone">Phone</label>
                                <Input
                                    id="inputPhone"
                                    placeholder="08123456789"
                                    type="text"
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="inputEmail">Email</label>
                                <Input
                                    id="inputEmail"
                                    placeholder="example@email.com"
                                    type="text"
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="inputAddress">Address</label>
                                <Input
                                    id="inputAddress"
                                    placeholder="City, Province, Street"
                                    type="text"
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="inputMessage">Message</label>
                                <Input
                                    id="inputMessage"
                                    placeholder="Type a message . . ."
                                    type="textarea"
                                ></Input>
                            </FormGroup>
                            <Button color="secondary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </Col>
                        <div className="space-70"></div>
                        <Col lg="6" sm="12" className="footer-list-item">
                            <h3 className="text-logo-about">PT. Panin Masinda Raya</h3>
                            <h4>Head Office</h4>
                            <div>
                                <p>Lorem ipsum doret amet</p>
                                <p>Lorem ipsum doret amet</p>
                                <p>Lorem ipsum doret amet</p>
                            </div>
                            <h4>Head Office</h4>
                            <div>
                                <p>Lorem ipsum doret amet</p>
                                <p>Lorem ipsum doret amet</p>
                                <p>Lorem ipsum doret amet</p>
                            </div>
                            <h4>Contact</h4>
                            <div>
                                <p>Phone</p>
                            </div>
                            <div>
                                <p>Email Info</p>
                            </div>
                            <div>
                                <p>Email Marketing</p>
                            </div>
                        </Col> 
                    </Row>
                    <Row>
                        <Col lg="12" sm="12">
                            <GoogleMaps />
                        </Col>
                    </Row>
                </div>
        </Container>
      </div>
    </>
  );
}

export default ContactUsElements;
