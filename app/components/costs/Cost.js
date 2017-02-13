import React, {Component} from 'react';
import { FormattedDate} from 'react-intl';

class Cost extends Component{
    constructor(props){
        super(props);
    }

    renderTypes(intlMessages, cost_types, cost){
        return cost_types.map(item=>{
           return item._id == cost ? intlMessages[item.name] : '';
        });
    }

    renderWorkers(workers, worker){
        return workers.map(item=>{
            return item._id == worker ? item.name : '';
        });
    }

    renderPlace(places, place){
        return places.map(item=>{
            return item._id == place ? item.address : '';
        });
    }

    render(){
        let {workers, places, cost_types, intlMessages, item, openModalEditItem, openModalRemoveItem} = this.props;

        return(
            <div className="list-row view-item  row-lg">
                <div className="list-column-left">
                </div>
                <div className="list-column-right">
                    <div className="">
                        <span className="btn btn-default btn-margin-left fa fa-pencil" onClick={()=> openModalEditItem(item)} >{}</span>
                        <span className="btn btn-default btn-margin-left fa fa-trash-o" onClick={()=> openModalRemoveItem(item)} >{}</span>
                    </div>
                </div>
                <div className="list-column-middle">
                    <div className="list-meta">
                        <span title={intlMessages['place']}><span className="fa fa-meetup">{}</span> {this.renderTypes(intlMessages, cost_types, item.cost_type)}</span>
                        <span title={intlMessages['date']}><span className="fa fa-calendar">{}</span> <FormattedDate value={item.date} /></span>
                        <span title={intlMessages['place']}><span className="fa fa-home">{}</span> {this.renderPlace(places, item.place)}</span>
                    </div>
                    <div className="list-text handle-list-item">
                        <span ><strong>{item.total}</strong></span>
                        <span >{this.renderWorkers(workers, item.worker)}</span>
                        <span >{item.description ? '('+ item.description+')' : ''}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cost;