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
import ClientItem from "../../components/ClientItem/IndexClientItem.js";

function ProductListElements() {

  return (
    <>
      <div className="section section" id="client-list-elements">
        <Container>
          <h2 className="title">Our Clients</h2>
          <div id="client-list">
            <Row>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 1" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 2" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 3" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 4" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 5" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 6" />
              </Col>
            </Row>
            <div className="space-70"></div>
            <Row>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 1" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 2" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 3" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 4" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 5" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={noImage} text="Client 6" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProductListElements;
