// client/src/components/Sidebar2.js
import React from 'react';

const Sidebar2 = ({ iframeSrc }) => {
    return (
        <div className="sidebar2">
            {iframeSrc ? (
                <iframe
                    src={iframeSrc}
                    width="100%"
                    height="100%"
                    title="Google Meet"
                />
            ) : (
                <div>Welcome to Sidebar2!</div>
            )}
        </div>
    );
};

export default Sidebar2;
