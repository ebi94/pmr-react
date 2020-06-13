/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function CustomFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div>
            <Row>
              <Col lg="4" sm="12" className="footer-list-item">
                <h4>Head Office</h4>
                <div>
                    <p>Lorem ipsum doret amet</p>
                    <p>Lorem ipsum doret amet</p>
                    <p>Lorem ipsum doret amet</p>
                </div>
              </Col>
              <Col lg="4" sm="12" className="footer-list-item">
                <h4>Warehouse</h4>
                <div>
                    <p>Lorem ipsum doret amet</p>
                    <p>Lorem ipsum doret amet</p>
                    <p>Lorem ipsum doret amet</p>
                </div>
              </Col>
              <Col lg="4" sm="12" className="footer-list-item">
                <h4>Contact</h4>
                <div>
                    <p>Phone</p>
                </div>
                <div>
                    <p>Email</p>
                </div>
                <div>
                    <p>Email</p>
                </div>
              </Col>
            </Row>
        </div>
        <div className="space-70"></div>
        <nav>
          <ul>
            <li>
              
            </li>
            <li>
              
            </li>
            <li>
              
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          Copyright © {new Date().getFullYear()}, PT Panin Masinda Raya | All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default CustomFooter;
