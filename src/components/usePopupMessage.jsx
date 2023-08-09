import { useState } from 'react';

export function usePopupMessage() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupMessageType, setPopupMessageType] = useState(false); // false for error, true for success

    const show = (message, messageType) => {
        setPopupMessage(message);
        setPopupMessageType(messageType);
        setShowPopup(true);
    };

    return {
        show,
        showPopup,
        popupMessage,
        popupMessageType,
        setShowPopup
    };
}
