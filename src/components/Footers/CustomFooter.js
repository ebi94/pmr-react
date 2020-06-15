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
                    <p>NCB BUILDING</p>
                    <p>Jl. Smapal No. 9 Lengkong Gudang Serpong</p>
                    <p>Tangerang Selatan 15311</p>
                </div>
              </Col>
              <Col lg="4" sm="12" className="footer-list-item">
                <h4>Warehouse</h4>
                <div>
                    <p>Depo Tanjung Priuk, Jakarta.</p>
                    <p>Jakarta, Lampung dan Jawa</p>
                </div>
              </Col>
              <Col lg="4" sm="12" className="footer-list-item">
                <h4>Contact</h4>
                <div>
                    <p>+6221 2148 0677</p>
                </div>
                <div>
                    <p>info@paninmasindaraya.com</p>
                </div>
                <div>
                    <p>sales@paninmasindaraya.com</p>
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
