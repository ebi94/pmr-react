import React, { useState } from "react";
import axios from "axios";

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
import Notification from 'components/Notification/IndexNotification.js';

const ContactUsElements = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showNotify, setShowNotify] = useState(false);
    const [color, setColor] = useState('info');
    const [textNotify, setTextNotify] = useState('');

    const submit = () => {
        setLoading(true);
        axios({
            method: "POST", 
            url: process.env.REACT_APP_GETFROM_URL, 
            data:  {
                name: name,
                email: email,
                phone: phone,
                address: address,
                message: message,
            }
          }).then((response)=>{
              console.log(response);
              if (response.status === 200) {
                resetState();
                setShowNotify(true);
                setTextNotify('Message has been send')
                setColor('success');
                setLoading(false);
                setTimeout(() => {
                    setShowNotify(false);
                }, 3000);
              }
            })
            .catch((error)=>{
                console.log(error);
                setTextNotify(`Error ! ${error && error.response && error.response.data && error.response.data.error}`)
                setColor('danger');
                setShowNotify(true);
                setLoading(false);
                setTimeout(() => {
                    setShowNotify(false);
                }, 3000);
            })
    }

    const resetState = () => {
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setMessage('');
    }

    return (
    <>
        <div className="section section-basic" id="basic-elements">
            <Container>
                <h2 className="title">Contact Us</h2>
                <div>
                    <Row>
                        <Col lg="6" sm="12" className="footer-list-item">
                        <Form className="form-contact-us">
                            <FormGroup>
                                <label htmlFor="inputName">Name</label>
                                <Input
                                    id="inputName"
                                    placeholder="Name"
                                    type="text"
                                    onChange={event => setName(event.target.value)}
                                    value={name}
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="inputPhone">Phone</label>
                                <Input
                                    id="inputPhone"
                                    placeholder="08123456789"
                                    type="text"
                                    onChange={event => setPhone(event.target.value)}
                                    value={phone}
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="inputEmail">Email</label>
                                <Input
                                    id="inputEmail"
                                    placeholder="example@email.com"
                                    type="text"
                                    onChange={event => setEmail(event.target.value)}
                                    value={email}
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="inputAddress">Address</label>
                                <Input
                                    id="inputAddress"
                                    placeholder="City, Province, Street"
                                    type="text"
                                    onChange={event => setAddress(event.target.value)}
                                    value={address}
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="inputMessage">Message</label>
                                <Input
                                    id="inputMessage"
                                    placeholder="Type a message . . ."
                                    type="textarea"
                                    onChange={event => setMessage(event.target.value)}
                                    value={message}
                                ></Input>
                            </FormGroup>
                            <Button 
                                color="secondary" 
                                onClick={() => submit()}
                                disabled={loading}
                                className="button-submit-form"
                            >
                                {loading ?  (<i className="now-ui-icons loader_refresh spin"></i>) : 'Submit'}
                            </Button>
                        </Form>
                        </Col>
                        <div className="space-70"></div>
                        <Col lg="6" sm="12" className="footer-list-item">
                            <h3 className="text-logo-about">PT. Panin Masinda Raya</h3>
                            <h4>Head Office</h4>
                            <div>
                                <p>NCB BUILDING</p>
                                <p>Jl. Smapal No. 9 Lengkong Gudang Serpong</p>
                                <p>Tangerang Selatan 15311</p>
                            </div>
                            <h4>Warehouse</h4>
                            <div>
                                <p>Depo Tanjung Priuk, Jakarta.</p>
                                <p>Jakarta, Lampung dan Jawa</p>
                            </div>
                            <h4>Contact</h4>
                            <div>
                                <p>+6221 2148 0677</p>
                            </div>
                            <div>
                                <p>info@paninmasindaraya.com</p>
                            </div>
                            <div>
                                <p>sales@paninmasindaraya.com</p>
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
      <Notification text={textNotify} color={color} alert={showNotify} />
    </>
  );
}

export default ContactUsElements;
