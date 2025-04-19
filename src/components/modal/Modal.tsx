import { ReactNode } from 'react';
import { colors, spacing, borders, shadows } from '@/tokens';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: spacing.md,
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: colors.neutral.white,
                    padding: spacing.lg,
                    borderRadius: borders.radius.lg,
                    boxShadow: shadows.xl,
                    minWidth: '300px',
                    maxWidth: '90%',
                }}
                onClick={(e) => e.stopPropagation()} // 🧠 Previene cierre al hacer clic dentro del modal
            >
                {children}
            </div>
        </div>
    );
};
