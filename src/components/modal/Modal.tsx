import './Modal.css';
import { ReactNode } from 'react';

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="pachakui-modal-overlay" onClick={onClose}>
            <div
                className="pachakui-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="pachakui-modal-close" onClick={onClose}>
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};
