import React from "react";
import PropTypes from "prop-types";

// reactstrap components
import { Container } from "reactstrap";

// core components

const BackgroundPageHeader = props => {
  let pageHeader = React.createRef();
  const { titlePage, backgroundImage } = props;


  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: backgroundImage
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">{titlePage}</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

BackgroundPageHeader.propTypes = {
    titlePage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
};

export default BackgroundPageHeader;
