import React from 'react';
import Cost from './Cost';

export default ({workers, places, cost_types, costs, intlMessages, openModalEditItem, openModalRemoveItem})=>(
    <div>
        {costs && costs.map(item=>{
            return <Cost key={item.name+item._id} item={item} intlMessages = {intlMessages}
                         workers={workers} places={places} cost_types={cost_types}
                         openModalEditItem={openModalEditItem} openModalRemoveItem={openModalRemoveItem} />
        })}
    </div>
);