import React from 'react';
import Item from './Item';

export default ({clients, intlMessages, items, openModalEditItem, openModalRemoveItem})=>(
    <div>
        {items && items.map((item)=>{
            return <Item key={item.name+item._id} item={item}
                         clients={clients}
                         intlMessages = {intlMessages}
                         openModalEditItem={openModalEditItem} openModalRemoveItem={openModalRemoveItem} />
        })}
    </div>
);