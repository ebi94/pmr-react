import React from "react";
import PropTypes from "prop-types";

// reactstrap components
import {
    Alert,
    Container
    
} from "reactstrap";

// core components

const IndexNotification = props => {
    const { alert, text, color } = props;
    

  return (
    <Alert color={color} isOpen={alert} id="alert-notification">
        <Container>
        <div className="alert-icon">
            {color === "success" ? (<i className="now-ui-icons ui-1_check"></i>) : (<i className="now-ui-icons travel_info"></i>)}
        </div>
            <strong>{text}</strong>
        <button
            type="button"
            className="close"
            onClick={alert}
        >
            <span aria-hidden="true">
            <i className="now-ui-icons ui-1_simple-remove"></i>
            </span>
        </button>
        </Container>
    </Alert>
  );
}

IndexNotification.propTypes = {
    alert: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default IndexNotification;
