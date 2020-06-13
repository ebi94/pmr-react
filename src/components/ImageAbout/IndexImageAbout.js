import React from "react";
import PropTypes from "prop-types";

// core components

const ImageAbout = props => {

  const { title,  image} = props;

  return (
    <div className="product-detail-image">
        <img
            alt={title}
            className="rounded img-raised img-product"
            src={image}>
        </img>
    </div>
  );
}

ImageAbout.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};

export default ImageAbout;
