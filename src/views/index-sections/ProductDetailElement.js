import React from "react";
import PropTypes from "prop-types";
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";
// Image
import ImageBeras from "../../assets/img/product/beras.jpg";
import ImageGula from "../../assets/img/product/gula.jpg";
import ImageMinyak from "../../assets/img/product/minyak-goreng.jpg";
import ImageTerigu from "../../assets/img/product/tepung-terigu.jpg";
// core components
import ItemProductDetail from "../../components/ItemProductDetail/IndexItemProductDetail.js";
import ItemProductDetailReverse from "../../components/ItemProductDetailReverse/IndexItemProductDetail.js";

import { MultiLang, Determinator } from "react-multi-language";

const ProductDetailElements = props => {
  const { idLang } = props;
  return (
    <>
      <div className="section section" id="product-detail-elements">
        <Container>
          <h2 className="title">
            <Determinator>
              {{ 
                  en: 'Products',
                  id: 'Produk'
              }}
            </Determinator>
          </h2>
          <div id="client-list">
            <Row>
              <Col lg="12" sm="12" className="product-detail-item">
                <ItemProductDetail
                  image={ImageBeras}
                  title={
                    <Determinator>
                        {{ 
                            en: 'Rice',
                            id: 'Beras'
                        }}
                    </Determinator>
                  }
                  description="Lorem Ipsum Doret amet. Lorem Ipsum Doret amet. Lorem Ipsum Doret amet" />
              </Col>
            </Row>
            <div className="space-70"></div>
            <Row>
              <Col lg="12" sm="12" className="product-detail-item">
                <ItemProductDetailReverse
                  image={ImageGula}
                  title={
                    <Determinator>
                        {{ 
                            en: 'Sugar',
                            id: 'Gula'
                        }}
                    </Determinator>
                  }
                  description="Lorem Ipsum Doret amet. Lorem Ipsum Doret amet. Lorem Ipsum Doret amet" />
              </Col>
            </Row>
            <div className="space-70"></div>
            <Row>
              <Col lg="12" sm="12" className="product-detail-item">
                <ItemProductDetail
                  image={ImageMinyak}
                  title={
                    <Determinator>
                        {{ 
                            en: 'Oil',
                            id: 'Minyak Goreng'
                        }}
                    </Determinator>
                  }
                  description="Lorem Ipsum Doret amet. Lorem Ipsum Doret amet. Lorem Ipsum Doret amet" />
              </Col>
            </Row>
            <div className="space-70"></div>
            <Row>
              <Col lg="12" sm="12" className="product-detail-item">
                <ItemProductDetailReverse
                  image={ImageTerigu}
                  title={
                    <Determinator>
                        {{ 
                            en: 'Flour',
                            id: 'Tepung Terigu'
                        }}
                    </Determinator>
                  }
                  description="Lorem Ipsum Doret amet. Lorem Ipsum Doret amet. Lorem Ipsum Doret amet" />
              </Col>
            </Row>
            <div className="space-70"></div>
          </div>
        </Container>
      </div>
      <MultiLang lang={idLang} />
    </>
  );
}

ProductDetailElements.propTypes = {
  idLang: PropTypes.string.isRequired
}

export default ProductDetailElements;
