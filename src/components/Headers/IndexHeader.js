/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";

// core components
import IndexSlider from "../Slider/IndexSlider.js";

const IndexHeader = props => {
  const { idLang } = props;

  return (
    <>
      <IndexSlider idLang={idLang} />
    </>
  );
}

IndexHeader.defaultProps = {
  idLang: 'en'
};

IndexHeader.propTypes = {
  idLang: PropTypes.string
};

export default IndexHeader;
