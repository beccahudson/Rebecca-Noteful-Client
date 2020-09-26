import React from 'react';
import PropTypes from 'prop-types';

const ErrorValidation = (props) => {
    if(props.message) {
        return(
            <div>
                 {props.message}
            </div>
        );
    }
    return <></>
}

ErrorValidation.propTypes = {
    history: PropTypes.string,
};

export default ErrorValidation;

