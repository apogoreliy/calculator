import React, {Component, PropTypes} from 'react';
import Button from '../common/Button';
import ModalWindow from '../common/ModalWindow';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class ModalAddEditItem extends Component {
    constructor(props) {
        super(props);

        let {name, price, date, description, unit} = this.props.item;
        this.state = { name, price, description, date: moment(date), unit};

        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeUnit = this.handleChangeUnit.bind(this);
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
                    price: this.state.price,
                    unit: this.state.unit,
                    date: moment(this.state.date).format('L'),
                    name: this.state.name,
                    description : this.state.description
                });
    }

    handleChangePrice(e){
        this.setState({price : e.target.value});
    }

    handleChangeUnit(e){
        this.setState({unit : e.target.value});
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
                    <label>{intlMessages['title']}</label>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               onChange={this.handleChangeName}
                               placeholder={intlMessages['title']}
                               name="name"
                               value={this.state.name}
                        />
                    </div>
                    <label>{intlMessages['price']}</label>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               onChange={this.handleChangePrice}
                               placeholder={intlMessages['price']}
                               name="price"
                               value={this.state.price}
                        />
                    </div>
                    <label>{intlMessages['unit']}</label>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               onChange={this.handleChangeUnit}
                               placeholder={intlMessages['unit']}
                               name="unit"
                               value={this.state.unit}
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