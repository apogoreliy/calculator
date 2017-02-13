import React, {Component, PropTypes} from 'react';
import Button from '../common/Button';
import ModalWindow from '../common/ModalWindow';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class ModalAddEditItem extends Component {
    constructor(props) {
        super(props);

        let {total, date, description, cost_type, place, worker} = this.props.item;
        this.state = {total, date: moment(date), description, cost_type, place, worker};

        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleChangeCost = this.handleChangeCost.bind(this);
        this.handleChangePlace = this.handleChangePlace.bind(this);
        this.handleChangeWorker = this.handleChangeWorker.bind(this);
        this.handleChangeTotal = this.handleChangeTotal.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    handleCancelClick() {
        this.props.closeModal();
    }

    handleClickBtn() {
        if(this.state.total !== 0)
            this.props.handleItem(this.props.item._id, {
                cost_type: this.state.cost_type === 0 ? this.props.cost_types[0]._id: this.state.cost_type,
                date: moment(this.state.date).format('L'),
                total: this.state.total,
                worker: this.state.worker === 0 ? this.props.workers[0]._id: this.state.worker,
                place: this.state.place === 0 ? this.props.places[0]._id: this.state.place,
                description : this.state.description
            });
    }

    handleChangeCost(e){
        this.setState({cost_type : e.target.value});
    }

    handleChangeTotal(e){
        this.setState({total : e.target.value});
    }

    handleChangePlace(e){
        this.setState({place : e.target.value});
    }

    handleChangeWorker(e){
        this.setState({worker : e.target.value});
    }

    handleChangeDate(date){
        this.setState({date});
    }

    handleChangeDescription(e){
        this.setState({description : e.target.value});
    }

    renderCosts(intlMessages, cost_types){
        let arr = [];
        for (let j in cost_types){
            if( cost_types.hasOwnProperty( j ) ) {
                let c = cost_types[j];
                arr.push (
                    <option key={c._id} value={c._id}>{intlMessages[c.name]}</option>
                )
            }
        }
        return arr;
    }

    renderPlaces(places){
        let arr = [];
        for (let j in places){
            if( places.hasOwnProperty( j ) ) {
                let c = places[j];
                arr.push (
                    <option key={c._id} value={c._id}>{c.address}</option>
                )
            }
        }
        return arr;
    }

    renderWorkers(workers){
        let arr = [];
        for (let j in workers){
            if( workers.hasOwnProperty( j ) ) {
                let c = workers[j];
                arr.push (
                    <option key={c._id} value={c._id}>{c.name}</option>
                )
            }
        }
        return arr;
    }

    render() {
        let {header, intlMessages, places, cost_types, workers} = this.props;

        return (
            <ModalWindow>
                <div className="modal-header">
                    <h4>{header}</h4>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>{intlMessages['costType']}</label>
                        <select
                            className="form-control"
                            onChange={this.handleChangeCost}
                            name="types"
                            value={this.state.cost_type}>
                            {this.renderCosts(intlMessages, cost_types)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>{intlMessages['place']}</label>
                        <select
                            className="form-control"
                            onChange={this.handleChangePlace}
                            name="types"
                            value={this.state.place}>
                            {places && this.renderPlaces(places)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>{intlMessages['worker']}</label>
                        <select
                            className="form-control"
                            onChange={this.handleChangeWorker}
                            name="types"
                            value={this.state.worker}>
                            {workers && this.renderWorkers(workers)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>{intlMessages['total']}</label>
                        <input type="text"
                               className="form-control"
                               onChange={this.handleChangeTotal}
                               placeholder={intlMessages['total']}
                               name="address"
                               value={this.state.total}
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