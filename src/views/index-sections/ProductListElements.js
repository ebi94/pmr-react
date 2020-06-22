import React, { useState } from "react";
import PropTypes from "prop-types";

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

import { MultiLang, Determinator } from "react-multi-language";

const ProductListElements = props => {
  const { idLang } = props;
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
          <h2 className="title">
            <Determinator>
              {{ 
                en: 'Our Products',
                id: 'Produk Kami'
              }}
            </Determinator>
          </h2>
          <div id="product-list">
            <Row>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem 
                  image={ImageBeras} 
                  text={
                    <Determinator>
                      {{ 
                        en: 'Rice',
                        id: 'Beras'
                      }}
                    </Determinator>
                  }
                  openGetQuote={() => {
                    setTitle('Rice / Beras');
                    setShowModal(true);
                  }}
                />
              </Col>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem
                  image={ImageGula}
                  text={
                    <Determinator>
                      {{ 
                        en: 'Sugar',
                        id: 'Gula'
                      }}
                    </Determinator>
                  }
                  openGetQuote={() => {
                    setTitle('Sugar / Gula');
                    setShowModal(true);
                  }}
                />
              </Col>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem
                  image={ImageMinyak}
                  text={
                    <Determinator>
                      {{ 
                        en: 'Oil',
                        id: 'Minyak Goreng'
                      }}
                    </Determinator>
                  }
                  openGetQuote={() => {
                    setTitle('Oil / Minyak Goreng');
                    setShowModal(true);
                  }}
                />
              </Col>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem
                  image={ImageTerigu}
                  text={
                    <Determinator>
                      {{ 
                        en: 'Flour',
                        id: 'Tepung Terigu'
                      }}
                    </Determinator>
                  }
                  openGetQuote={() => {
                    setTitle('Flour / Tepung Terigu');
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
        <MultiLang lang={idLang} />
    </>
  );
}

ProductListElements.propTypes = {
  idLang: PropTypes.string.isRequired
};

export default ProductListElements;
