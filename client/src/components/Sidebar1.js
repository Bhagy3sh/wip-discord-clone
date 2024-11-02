// client/src/components/Sidebar1.js
import React from 'react';

const Sidebar1 = ({ onCreateClick }) => {
    return (
        <div className="sidebar1">
            <button onClick={onCreateClick}>Create Meet</button>
        </div>
    );
};

export default Sidebar1;
