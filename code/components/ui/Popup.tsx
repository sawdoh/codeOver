// app/components/ui/Popup.tsx
import React from 'react';

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      borderRadius: '8px',
      zIndex: 1000,
    }}>
      <p>{message}</p>
      <button onClick={onClose} style={{ marginTop: '10px' }}>Close</button>
    </div>
  );
};

export { Popup };
