import React from 'react';
import Item from './Item';

export default ({intlMessages, items, openModalEditItem, openModalRemoveItem})=>(
    <div>
        {items && items.map((item)=>{
            return <Item key={item.name+item._id} item={item}
                         intlMessages = {intlMessages}
                         openModalEditItem={openModalEditItem} openModalRemoveItem={openModalRemoveItem} />
        })}
    </div>
);