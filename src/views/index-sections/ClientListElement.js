import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";
// Image
import client1 from "../../assets/img/client/asia-trade-logo.png";
import client2 from "../../assets/img/client/bt-cocoa-logo.png";
import client3 from "../../assets/img/client/bulog-logo.jpg";
import client4 from "../../assets/img/client/ypslogo.png";
import client5 from "../../assets/img/client/cv-ukb-logo.png";
import client6 from "../../assets/img/client/pt-triwijaya-sari-logo.png";
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
                <ClientItem image={client1} text="Client 1" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={client2} text="Client 2" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={client3} text="Client 3" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={client4} text="Client 4" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={client5} text="Client 5" />
              </Col>
              <Col lg="2" sm="4" className="client-list-item">
                <ClientItem image={client6} text="Client 6" />
              </Col>
            </Row>
            <div className="space-70"></div>
            {/* <Row>
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
            </Row> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProductListElements;
