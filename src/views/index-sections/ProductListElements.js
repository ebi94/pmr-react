import React, { useState } from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Modal,
  ModalBody
} from "reactstrap";
// Image
import ImageBeras from "../../assets/img/product/beras.jpg";
import ImageGula from "../../assets/img/product/gula.jpg";
import ImageMinyak from "../../assets/img/product/minyak-goreng.jpg";
import ImageTerigu from "../../assets/img/product/tepung-terigu.jpg";
// core components
import ProductItem from "../../components/ProductItem/IndexProductItem.js";
import FormGetQuote from "components/FormGetQuote/IndexFormGetQuote.js";
import Notification from "components/Notification/IndexNotification.js";

const ProductListElements = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('info');
  const [textNotify, setTextNotify] = useState('');

  React.useEffect(() => {
      setTimeout(() => {
          setShowNotify(false);
      }, 3000);
  }, [showNotify])

  return (
    <>
      <div className="section section-tabs" id="product-list-elements">
        <Container>
          <h2 className="title">Our Products</h2>
          <div id="product-list">
            <Row>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem 
                  image={ImageBeras} 
                  text="Beras" 
                  openGetQuote={() => {
                    setTitle('Beras');
                    setShowModal(true);
                  }}
                />
              </Col>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem
                  image={ImageGula}
                  text="Gula" 
                  openGetQuote={() => {
                    setTitle('Gula');
                    setShowModal(true);
                  }}
                />
              </Col>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem
                  image={ImageMinyak}
                  text="Minyak Goreng"
                  openGetQuote={() => {
                    setTitle('Minyak Goreng');
                    setShowModal(true);
                  }}
                />
              </Col>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem
                  image={ImageTerigu}
                  text="Tepung Terigu"
                  openGetQuote={() => {
                    setTitle('Tepung Terigu');
                    setShowModal(true);
                  }}  
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Modal
            toggle={() => setShowModal(false)}
            isOpen={showModal}
        >
            <div className="modal-header justify-content-center">
                <button
                    className="close"
                    type="button"
                    onClick={() => setShowModal(false)}
                >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
                    <h4 className="title title-up">Get Quote</h4>
            </div>
            <ModalBody>
              <FormGetQuote 
                title={title} 
                modal={showModal}
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

export default ProductListElements;
