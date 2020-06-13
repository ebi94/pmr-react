import React from "react";
import PropTypes from "prop-types";

// reactstrap components
import {
    Row,
    Col,
    Button,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Input
} from "reactstrap";

// core components

const IndexProductItemDetail = props => {
    const { title, description, image} = props;
    const [modal, setModal] = React.useState(false);

  return (
    <>
        <div className="box-product-item-detail">
            <Row>
                <Col lg="6" sm="12">
                    <div className="product-detail-image">
                        <img
                            alt={title}
                            className="rounded img-raised img-product"
                            src={image}>
                        </img>
                    </div>
                </Col>
                <Col lg="6" sm="12">
                    <div className="product-detail-text">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Button 
                            className="btn-round btn-get-quote-product-detail" 
                            color="info" 
                            outline type="button"
                            onClick={() => setModal(true)}>
                                Get Quote
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
        <Modal
            toggle={() => setModal(false)}
            isOpen={modal}
        >
            <div className="modal-header justify-content-center">
                <button
                    className="close"
                    type="button"
                    onClick={() => setModal(false)}
                >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                    <h4 className="title title-up">Get Quote</h4>
            </div>
            <ModalBody>
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
                        <label htmlFor="inputProduct">Product</label>
                        <Input
                            id="inputProduct"
                            placeholder={title}
                            value={title}
                            type="text"
                            disabled
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
            </ModalBody>
            <div className="modal-footer">
            </div>
        </Modal>
    </>
  );
}

IndexProductItemDetail.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};

export default IndexProductItemDetail;
