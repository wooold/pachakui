import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@components/modal'; // ✅ uso de alias
import { Button } from '@components/button/Button'; // ✅ ruta clara y sin conflictos

const meta: Meta = {
    title: 'Components/Modal',
    component: Modal,
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Título del modal"
                >
                    <p>Este es el contenido del modal.</p>
                </Modal>
            </>
        );
    },
};
