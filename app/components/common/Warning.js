import React, {PropTypes} from 'react';

const Warning = ({strongText, text}) => (
    <div className="alert alert-warning" role="alert">
        <strong>{strongText}</strong> {text}
    </div>
);

Warning.propType = {
    strongText : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired
};
export default Warning;