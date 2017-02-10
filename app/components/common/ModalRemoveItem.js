import React, {PropTypes} from 'react';
import Button from './Button';
import ModalWindow from './ModalWindow';

const ModalRemoveItem = ({intlMessages, type, item, removeItem, closeModal})=>(
    <ModalWindow>
        <div className="modal-body">
            <h4>{intlMessages['deleteItem'] + type + '?'}</h4>
        </div>
        <div className="modal-footer">
            <Button classSet="btn-primary" handleClick={()=>removeItem(item)} text={intlMessages['remove']}/>
            <Button classSet="btn-danger" handleClick={()=>closeModal()} text={intlMessages['cancel']}/>
        </div>
    </ModalWindow>
);

ModalRemoveItem.propTypes = {
    item : PropTypes.object,
    type : PropTypes.string,
    intlMessages : PropTypes.object,
    removeItem : PropTypes.func,
    closeModal : PropTypes.func
};

export default ModalRemoveItem;