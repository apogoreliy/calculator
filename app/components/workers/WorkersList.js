import React from 'react';
import Worker from './Worker';

export default ({workers, intlMessages, openModalEditItem, openModalRemoveItem})=>(
    <div>
        {workers && workers.map((item)=>{
            return <Worker key={item.name+item._id} item={item} intlMessages = {intlMessages}
                         openModalEditItem={openModalEditItem} openModalRemoveItem={openModalRemoveItem} />
        })}
    </div>
);