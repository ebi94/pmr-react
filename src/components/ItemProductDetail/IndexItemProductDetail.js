import React, { useState } from "react";
import PropTypes from "prop-types";

// reactstrap components
import {
    Row,
    Col,
    Button,
    Modal,
    ModalBody
} from "reactstrap";

// core components
import FormGetQuote from "../../components/FormGetQuote/IndexFormGetQuote.js";
import Notification from "components/Notification/IndexNotification.js";

const IndexProductItemDetail = props => {
    const { title, description, image} = props;
    const [modal, setModal] = useState(false);
    const [showNotify, setShowNotify] = useState(false);
    const [color, setColor] = useState('info');
    const [textNotify, setTextNotify] = useState('');

    React.useEffect(() => {
        setTimeout(() => {
            setShowNotify(false);
        }, 3000);
    }, [showNotify])


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
                            className="btn btn-primary btn-get-quote-product-detail" 
                            color="primary" 
                            type="button"
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
                <FormGetQuote 
                    title={title} 
                    modal={modal => setModal(modal)}
                    textNotify={textNotify => setTextNotify(textNotify)}
                    color={color => setColor(color)}
                    alert={alert => setShowNotify(alert)}
                />
            </ModalBody>
            <div className="modal-footer">
            </div>
        </Modal>
        <Notification text={textNotify} color={color} alert={showNotify} />
    </>
  );
}

IndexProductItemDetail.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};

export default IndexProductItemDetail;
