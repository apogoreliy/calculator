import React from 'react';

const Spinner = ({loaded}) => (
    <div>
        { loaded && <div className="spinner">
                <span className="helper">{}</span>
            <img src="./ajax_loader.gif"/>
            </div>
        }
    </div>
);

Spinner.propTypes = {
    loaded : React.PropTypes.bool
};

export default Spinner;