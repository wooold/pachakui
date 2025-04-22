import React from 'react';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string; // ✅ ahora está tipado correctamente
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 999,
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '24px',
                    minWidth: '300px',
                    maxWidth: '500px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {title && <h2 style={{ marginBottom: '16px' }}>{title}</h2>}
                {children}
            </div>
        </div>
    );
};
