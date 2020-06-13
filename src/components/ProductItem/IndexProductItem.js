import React from "react";
import PropTypes from "prop-types";

// reactstrap components
import {
  Button
} from "reactstrap";

// core components

const IndexProductItem = props => {
    const { text, image} = props;
    const [showQuote, setShowQuote] = React.useState(false);

    const handleMouseHover = () => {
        if(showQuote === true){
            setShowQuote(false)
        }else{
            setShowQuote(true)
        }
    }

  return (
    <>
        <div className="box-product-item">
            <img
                alt={text}
                className="rounded img-raised img-product"
                src={image}
                // src={require({image})}
                onMouseEnter={() => handleMouseHover()}
                onMouseLeave={() => handleMouseHover()}
                ></img>
            <h4>{text}</h4>
            {showQuote && (
                <Button 
                    className="btn-round btn-get-quote-item" 
                    color="info" 
                    outline type="button" 
                    onMouseEnter={() => setShowQuote(true)}
                    onMouseLeave={() => setShowQuote(true)}>
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
	image: PropTypes.string
};

export default IndexProductItem;
