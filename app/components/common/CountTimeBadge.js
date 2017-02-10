import React from 'react';

export default ({time})=>(
    <div style={{display:"inline"}}>{
        time !== 0 &&
        <button className="btn btn-primary" type="button">
            Time <span className="badge">{time}</span>
        </button>}
    </div>
);