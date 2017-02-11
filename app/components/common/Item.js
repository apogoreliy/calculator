import React from 'react';
import { FormattedDate} from 'react-intl';

const renderClients = (clients, currentClient)=>{
    return clients.map(item =>{
        if(item._id === currentClient){
            return item.name;
        }
    });
};

export default ({clients, intlMessages, item, openModalEditItem, openModalRemoveItem})=>(
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
            {item.client ?
                <div>
                    <div className="list-meta">
                        <span title={intlMessages['date']}><span className="fa fa-calendar">{}</span><FormattedDate value={item.date} /></span>
                        <span title={intlMessages['client']}><span className="fa fa-user-secret">{}</span>{renderClients(clients, item.client)}</span>
                    </div>
                    <div className="list-text handle-list-item">
                        <span >{item.address}</span>
                        <span >({item.description})</span>
                    </div>
                </div> :
                <span>{item.name}</span>
            }
        </div>
    </div>
);