import React from 'react';
import services from '../../utils/services';

const SearchFilter = ({onChange, placeholderText}) =>(
    <div className="form-group">
        <input type="text" className="form-control" placeholder={placeholderText} onChange={(e)=>{ onChange(services.he(e.target.value)); }}/>
    </div>
);

export default SearchFilter;