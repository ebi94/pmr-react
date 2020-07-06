import React from "react";
import PropTypes from "prop-types";
import { MultiLang, Determinator } from "react-multi-language";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

const CustomFooter = props =>  {
  const { onClickId, onClickEn, idLang } = props;

  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div>
            <Row>
              <Col lg="4" sm="12" className="footer-list-item">
                <h4>
                  <Determinator>
                    {{ 
                      en: 'Head Office',
                      id: 'Kantor Pusat'
                    }}
                  </Determinator>
                </h4>
                <div>
                    <p>NCB BUILDING</p>
                    <p>Jl. Smapal No. 9 Lengkong Gudang Serpong</p>
                    <p>Tangerang Selatan 15311</p>
                </div>
              </Col>
              <Col lg="4" sm="12" className="footer-list-item">
                <h4>
                  <Determinator>
                    {{ 
                      en: 'Warehouse',
                      id: 'Gudang'
                    }}
                  </Determinator>
                </h4>
                <div>
                    <p>Aeropolis Technopark Blok WH.BS.30</p>
                    <p>Jalan Marsekal Suryadarma</p>
                    <p>Neglasari, Kota Tangerang</p>
                </div>
              </Col>
              <Col lg="4" sm="12" className="footer-list-item">
                <h4>
                  <Determinator>
                    {{ 
                      en: 'Contact',
                      id: 'Kontak'
                    }}
                  </Determinator>
                </h4>
                <div>
                    <p>+6221 2148 0677</p>
                </div>
                <div>
                    <p>admin@paninmasindaraya.com</p>
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
          <div className="left-footer">
            <Determinator>
              {{ 
                en: 'Language',
                id: 'Bahasa'
              }}
            </Determinator> : <span onClick={onClickEn}>EN</span> / <span onClick={onClickId}>ID</span></div>
          <div>Copyright © {new Date().getFullYear()}, PT Panin Masinda Raya | All rights reserved.</div>
          <MultiLang lang={idLang} />
        </div>
      </Container>
    </footer>
  );
}

CustomFooter.propTypes = {
  onClickId: PropTypes.func.isRequired,
  onClickEn: PropTypes.func.isRequired,
  idLang: PropTypes.string.isRequired
};

export default CustomFooter;
