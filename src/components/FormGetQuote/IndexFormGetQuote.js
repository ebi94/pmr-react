import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// reactstrap components
import {
    Button,
    Form,
    FormGroup,
    Input
} from "reactstrap";

import { MultiLang, Determinator } from "react-multi-language";

const IndexFormGetQuote = props => {
    const { title, modal, textNotify, color, alert, idLang } = props;
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const getQuote = () => {
        setLoading(true);
        axios({
            method: "POST", 
            url: process.env.REACT_APP_GETFROM_URL, 
            data:  {
                From: name,
                Email: email,
                Phone: phone,
                Address: address,
                Product: title,
                Message: message
            }
          })
          .then((response)=>{
            console.log(response);
            if (response.status === 200) {
                resetState();
                alert(true);
                textNotify('Message has been send')
                color('success');
                setLoading(false);
                modal(false);
              } else {
                textNotify(`Error !}`)
                color('danger');
                alert(true);
                setLoading(false);
                console.log(response);
              }
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
        <Form>
            <FormGroup>
                <label htmlFor="inputName">
                    <Determinator>
                        {{ 
                            en: 'Name',
                            id: 'Nama'
                        }}
                    </Determinator>
                </label>
                <Input
                    id="inputName"
                    placeholder="Name"
                    type="text"
                    onChange={event => setName(event.target.value)}
                    value={name}
                ></Input>
            </FormGroup>
            <FormGroup>
                <label htmlFor="inputPhone">
                    <Determinator>
                        {{ 
                            en: 'Phone',
                            id: 'No Telepon'
                        }}
                    </Determinator>
                </label>
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
                <label htmlFor="inputProduct">
                    <Determinator>
                        {{ 
                            en: 'Product',
                            id: 'Produk'
                        }}
                    </Determinator>
                </label>
                <Input
                    id="inputProduct"
                    placeholder={title}
                    value={title}
                    type="text"
                    disabled
                ></Input>
            </FormGroup>
            <FormGroup>
                <label htmlFor="inputAddress">
                    <Determinator>
                        {{ 
                            en: 'Address',
                            id: 'Alamat'
                        }}
                    </Determinator>
                </label>
                <Input
                    id="inputAddress"
                    placeholder="City, Province, Street"
                    type="text"
                    onChange={event => setAddress(event.target.value)}
                    value={address}
                ></Input>
            </FormGroup>
            <FormGroup>
                <label htmlFor="inputMessage">
                    <Determinator>
                        {{ 
                            en: 'Message',
                            id: 'Pesan'
                        }}
                    </Determinator></label>
                <Input
                    id="inputMessage"
                    placeholder="Type a message . . ."
                    type="textarea"
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                ></Input>
            </FormGroup>
            <Button color="secondary" onClick={() => getQuote()} disabled={loading} className="button-submit-form">
                {loading ?  (<i className="now-ui-icons loader_refresh spin"></i>) : 'Submit'}
            </Button>
        </Form>
        <MultiLang lang={idLang} />
    </>
  );
}

IndexFormGetQuote.propTypes = {
    title: PropTypes.string.isRequired,
    modal: PropTypes.bool.isRequired,
    textNotify: PropTypes.func.isRequired,
    color: PropTypes.func.isRequired,
    alert: PropTypes.func.isRequired,
    idLang: PropTypes.string.isRequired
};

export default IndexFormGetQuote;
