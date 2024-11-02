import React from 'react';
import './Modal.css'; // Add some styles for the modal

const Modal = ({ isOpen, onClose, meetingLink }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Join Meeting</h2>
                <iframe
                    src={meetingLink}
                    width="600"
                    height="400"
                    title="Google Meet"
                    allow="camera; microphone; fullscreen"
                />
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
