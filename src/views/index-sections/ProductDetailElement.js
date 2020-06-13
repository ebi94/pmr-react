import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";
// Image
import noImage from "../../assets/img/no-image.png";
// core components
import ItemProductDetail from "../../components/ItemProductDetail/IndexItemProductDetail.js";
import ItemProductDetailReverse from "../../components/ItemProductDetailReverse/IndexItemProductDetail.js";

function ProductDetailElements() {

  return (
    <>
      <div className="section section" id="product-detail-elements">
        <Container>
          <h2 className="title">Products</h2>
          <div id="client-list">
            <Row>
              <Col lg="12" sm="12" className="product-detail-item">
                <ItemProductDetail image={noImage} title="Beras" description="Lorem Ipsum Doret amet. Lorem Ipsum Doret amet. Lorem Ipsum Doret amet" />
              </Col>
            </Row>
            <div className="space-70"></div>
            <Row>
              <Col lg="12" sm="12" className="product-detail-item">
                <ItemProductDetailReverse image={noImage} title="Gula" description="Lorem Ipsum Doret amet. Lorem Ipsum Doret amet. Lorem Ipsum Doret amet" />
              </Col>
            </Row>
            <div className="space-70"></div>
            <Row>
              <Col lg="12" sm="12" className="product-detail-item">
                <ItemProductDetail image={noImage} title="Minyak Goreng" description="Lorem Ipsum Doret amet. Lorem Ipsum Doret amet. Lorem Ipsum Doret amet" />
              </Col>
            </Row>
            <div className="space-70"></div>
            <Row>
              <Col lg="12" sm="12" className="product-detail-item">
                <ItemProductDetailReverse image={noImage} title="Tepung Terigu" description="Lorem Ipsum Doret amet. Lorem Ipsum Doret amet. Lorem Ipsum Doret amet" />
              </Col>
            </Row>
            <div className="space-70"></div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProductDetailElements;
