import React from "react";
import noImage from "../../assets/img/no-image.png";

// reactstrap components
import {
  Container, 
  Row, 
  Col
} from "reactstrap";

// core components
import ImageAbout from "../../components/ImageAbout/IndexImageAbout.js"

const AboutUsImageElements = () => {

  return (
    <>
      <div className="section section-basic" id="about-image-elements">
        <Container>
            <Row>
              <Col lg="6" sm="12">
                <ImageAbout title="title" image={noImage} />
              </Col>
              <Col lg="6" sm="12">
                <ImageAbout title="title" image={noImage} />
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsImageElements;
