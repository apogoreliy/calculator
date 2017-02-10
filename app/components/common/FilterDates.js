import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class FilterDates extends Component{
    constructor(props){
        super(props);

        this.state={startDate: moment(new Date()).startOf('month'), endDate : moment(new Date())};
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
        this.renewEndDate = this.renewEndDate.bind(this);
    }

    handleChangeStartDate(date){
        this.setState({startDate : date});
        this.props.filterDates(moment(date).format('L'), moment(this.state.endDate).format('L'));
    }

    handleChangeEndDate(date){
        this.setState({endDate : date});
        this.props.filterDates(moment(this.state.startDate).format('L'), moment(date).format('L'));
    }

    renewEndDate(){
        this.handleChangeStartDate(moment(new Date()).startOf('month'));
        this.handleChangeEndDate(moment(new Date()));
    }

    render(){
        return(
            <div className="form-group">
                <label>Date start</label>
                <DatePicker className="date-input form-control"
                            selected={this.state.startDate}
                            onChange={this.handleChangeStartDate}  />
                <label>Date end</label>
                <DatePicker className="date-input form-control"
                            selected={this.state.endDate}
                            onChange={this.handleChangeEndDate}  />
                <span className="fa fa-repeat" onClick={this.renewEndDate}>{}</span>
            </div>
        )
    }
}

export default FilterDates;