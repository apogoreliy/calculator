import React, { PropTypes } from 'react';

const Button = ({classSet, handleClick, text, icon}) => (
    <button type = "button" className= {`btn ${classSet}`} onClick={handleClick}>
        <i className={icon && 'fa icon ' + icon} aria-hidden="true">{}</i>{text}</button>
);

Button.propType = {
    classSet : PropTypes.string,
    handleClick : PropTypes.func.isRequired,
    text: PropTypes.any,
    icon : PropTypes.string
};

export default Button;