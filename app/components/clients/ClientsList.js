import React from 'react';
import Client from './Client';

export default ({clients, intlMessages, openModalEditItem, openModalRemoveItem})=>(
    <div>
        {clients && clients.map((item)=>{
            return <Client key={item.name+item._id} item={item} intlMessages = {intlMessages}
                         openModalEditItem={openModalEditItem} openModalRemoveItem={openModalRemoveItem} />
        })}
    </div>
);