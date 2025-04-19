import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../button/Button';

const meta: Meta<typeof Modal> = {
    title: 'Components/Overlay/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button label="Abrir Modal" onClick={() => setIsOpen(true)} />

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <h2 style={{ marginBottom: '1rem' }}>Este es un modal ✨</h2>
                    <p>Puedes hacer clic fuera para cerrarlo, o agregar botones aquí dentro.</p>
                </Modal>
            </>
        );
    },
};
