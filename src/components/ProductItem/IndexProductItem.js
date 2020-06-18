import React from "react";
import PropTypes from "prop-types";

// reactstrap components
import {
  Button
} from "reactstrap";

// core components

const IndexProductItem = props => {
    const { text, image, openGetQuote} = props;
    const [showQuote, setShowQuote] = React.useState(false);

  return (
    <>
        <div className="box-product-item">
            <img
                alt={text}
                className="rounded img-raised img-product-home"
                src={image}
                // src={require({image})}
                onMouseEnter={() => setShowQuote(true)}
                onMouseLeave={() => setShowQuote(false)}
                ></img>
            <h4>{text}</h4>
            {showQuote && (
                <Button 
                    className="btn btn-primary btn-get-quote-item" 
                    color="primary" 
                    type="button"
                    onClick={openGetQuote}
                    onMouseEnter={() => setShowQuote(true)}>
                        Get Quote
                </Button>
            )}
        </div>
    </>
  );
}

IndexProductItem.defaultProps = {
    text: '-',
    image: '-'
};

IndexProductItem.propTypes = {
	text: PropTypes.string,
    image: PropTypes.string,
    openGetQuote: PropTypes.func.isRequired
};

export default IndexProductItem;
