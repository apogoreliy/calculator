import React, {Component, PropTypes} from 'react';
import Button from './common/Button';
import ModalWindow from './common/ModalWindow';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class ModalAddEditEffect extends Component {
    constructor(props) {
        super(props);

        let {name , date, time, type, description} = this.props.effect;
        this.state = {type, name , date: moment(date), time, description, types: this.props.types};

        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    handleCancelClick() {
        this.props.closeModal();
    }

    handleClickBtn() {
        this.props.handleItem(this.props.effect._id,
            {name: this.state.name,
            type: this.state.type === 0 ? this.props.types[this.state.type]['name']: this.state.type,
            date: moment(this.state.date).format('L'),
            time: this.state.time,
            description : this.state.description
        });
    }

    handleChangeName(e){
        this.setState({name : e.target.value});
    }

    handleChangeDate(date){
        this.setState({date});
    }

    handleChangeTime(e){
        this.setState({time : e.target.value});
    }

    handleChangeType(e){
        this.setState({type : e.target.value});
    }

    handleChangeDescription(e){
        this.setState({description : e.target.value});
    }

    renderTypes (types) {
        let arr = [];
        for (let j in types){
            if( types.hasOwnProperty( j ) ) {
                let t = types[j];
                arr.push (
                    <option key={'type'+t.name} value={t.name}>{t.name}</option>
                )
            }
        }
        return arr;
    }

    render() {
        return (
            <ModalWindow>
                <div className="modal-header">
                    <h4>{this.props.header}</h4>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Type</label>
                        <select
                            className="form-control"
                            onChange={this.handleChangeType}
                            name="types"
                            value={this.state.type}>
                            {this.props.types && this.renderTypes(this.props.types)}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"
                               className="form-control"
                               onChange={this.handleChangeName}
                               placeholder="Name"
                               name="name"
                               value={this.state.name}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea type="text"
                                  rows="3"
                                  onChange={this.handleChangeDescription}
                                  value={this.state.description}
                                  className="form-control">{}
                        </textarea>
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <DatePicker className="date-input form-control"
                                    selected={this.state.date}
                                    onChange={this.handleChangeDate}  />
                    </div>

                    <div className="form-group">
                        <label >Time</label>
                        <input type="text"
                               className="form-control"
                               onChange={this.handleChangeTime}
                               placeholder="Time"
                               name="time"
                               value={this.state.time}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <Button classSet="btn-primary" handleClick={this.handleClickBtn} text="Ok"/>
                    <Button classSet="btn-danger" handleClick={this.handleCancelClick} text="Cancel"/>
                </div>
            </ModalWindow>
        )
    }
}

ModalAddEditEffect.propTypes = {
    header: PropTypes.string,
    effect : PropTypes.object,
    types : PropTypes.array,
    handleItem : PropTypes.func,
    closeModal : PropTypes.func
};

export default ModalAddEditEffect;