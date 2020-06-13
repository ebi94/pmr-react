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
import ProductItem from "../../components/ProductItem/IndexProductItem.js";

function ProductListElements() {

  return (
    <>
      <div className="section section-tabs" id="product-list-elements">
        <Container>
          <h2 className="title">Our Products</h2>
          <div id="product-list">
            <Row>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem image={noImage} text="Beras" />
              </Col>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem image={noImage} text="Gula" />
              </Col>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem image={noImage} text="Minyak Goreng" />
              </Col>
              <Col lg="3" sm="6" className="product-list-item">
                <ProductItem image={noImage} text="Tepung Terigu" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProductListElements;
