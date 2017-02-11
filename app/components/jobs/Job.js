import React from 'react';
import { FormattedDate} from 'react-intl';

export default ({intlMessages, item, openModalEditItem, openModalRemoveItem})=>(
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
                <span title={intlMessages['date']}><span className="fa fa-calendar">{}</span> <FormattedDate value={item.date} /></span>
                <span title={intlMessages['price']}><span className="fa fa-usd"> {item.price}</span></span>
                <span title={intlMessages['unit']}><span className="fa fa-dot-circle-o"> {item.unit}</span></span>
            </div>
            <div className="list-text handle-list-item">
                <span >{item.name}</span>
                <span >({item.description})</span>
            </div>
        </div>
    </div>
);