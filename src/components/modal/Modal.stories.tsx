import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '@/components/button';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Interactive: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button label="Abrir Modal" onClick={() => setOpen(true)} />
                <Modal isOpen={open} onClose={() => setOpen(false)}>
                    <h2>¡Hola desde Pachakui!</h2>
                    <p>Este es un modal bonito, con animación y cierre inteligente ✨</p>
                </Modal>
            </>
        );
    },
};
