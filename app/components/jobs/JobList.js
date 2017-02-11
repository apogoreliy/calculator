import React from 'react';
import Job from './Job';

export default ({jobs, intlMessages, openModalEditItem, openModalRemoveItem})=>(
    <div>
        {jobs && jobs.map((item)=>{
            return <Job key={item.name+item._id} item={item} intlMessages = {intlMessages}
                         openModalEditItem={openModalEditItem} openModalRemoveItem={openModalRemoveItem} />
        })}
    </div>
);