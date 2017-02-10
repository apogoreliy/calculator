import React, {Component, PropTypes} from 'react';

class ModalWindow extends Component {
    render() {
        return(
            <div>
                <div className="modal in modal-block" role="dialog" aria-labelledby="modal-label">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop in modal-block"></div>
            </div>
        );
    }
}

ModalWindow.propTypes = {
    children: PropTypes.any
};

export default ModalWindow;