import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

const PopupMessage = ({ message, duration, onClose ,messageType}) => {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!showPopup) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '10px',
                background: 'rgba(0, 0, 0, 0.7)',
                color: '#fff',
                borderRadius: '5px',
                zIndex: '9999',
            }}
        >
            <Alert variant="filled" severity={messageType ? "success": "error"} color={messageType ? "secondary" : undefined}>
                {message}
            </Alert>
        </div>
    );
};

export default PopupMessage;