import React from "react";
import PropTypes from "prop-types";

// core components

const IndexClientItem = props => {
    const { text, image} = props;

  return (
    <>
        <div className="box-client-item">
            <img
                alt={text}
                className="rounded-circle img-raised img-product"
                src={image}
                ></img>
            <h4>{text}</h4>
        </div>
    </>
  );
}

IndexClientItem.defaultProps = {
    text: '-',
    image: '-'
};

IndexClientItem.propTypes = {
	text: PropTypes.string,
	image: PropTypes.string
};

export default IndexClientItem;
