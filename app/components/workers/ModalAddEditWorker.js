import React, {Component, PropTypes} from 'react';
import Button from '../common/Button';
import ModalWindow from '../common/ModalWindow';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class ModalAddEditItem extends Component {
    constructor(props) {
        super(props);

        let {name, address, date, description} = this.props.item;
        this.state = { name, address, description, date: moment(date)};

        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    handleCancelClick() {
        this.props.closeModal();
    }

    handleClickBtn() {
        if(this.state.address !== '')
            this.props.handleItem(this.props.item._id, {
                    address: this.state.address,
                    date: moment(this.state.date).format('L'),
                    name: this.state.name,
                    description : this.state.description
                });
    }

    handleChangeAddress(e){
        this.setState({address : e.target.value});
    }

    handleChangeDate(date){
        this.setState({date});
    }

    handleChangeName(e){
        this.setState({name : e.target.value});
    }

    handleChangeDescription(e){
        this.setState({description : e.target.value});
    }

    render() {
        let {header, intlMessages, clients} = this.props;

        return (
            <ModalWindow>
                <div className="modal-header">
                    <h4>{header}</h4>
                </div>
                <div className="modal-body">
                    <label>{intlMessages['name']}</label>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               onChange={this.handleChangeName}
                               placeholder={intlMessages['name']}
                               name="address"
                               value={this.state.name}
                        />
                    </div>
                    <label>{intlMessages['address']}</label>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               onChange={this.handleChangeAddress}
                               placeholder={intlMessages['address']}
                               name="address"
                               value={this.state.address}
                        />
                    </div>
                    <div className="form-group">
                        <label>{intlMessages['date']}</label>
                        <DatePicker className="date-input form-control"
                                    selected={this.state.date}
                                    onChange={this.handleChangeDate}  />
                    </div>
                    <div className="form-group">
                        <textarea type="text"
                                  placeholder={intlMessages['description']}
                                  rows="3"
                                  onChange={this.handleChangeDescription}
                                  value={this.state.description}
                                  className="form-control">{}
                        </textarea>
                    </div>
                </div>
                <div className="modal-footer">
                    <Button classSet="btn-primary" handleClick={this.handleClickBtn} text={intlMessages['ok']}/>
                    <Button classSet="btn-danger" handleClick={this.handleCancelClick} text={intlMessages['cancel']}/>
                </div>
            </ModalWindow>
        )
    }
}

ModalAddEditItem.propTypes = {
    item : PropTypes.object,
    handleItem : PropTypes.func,
    closeModal : PropTypes.func
};

export default ModalAddEditItem;