import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Form/Textarea',
    component: Textarea,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState('');

        return (
            <Textarea
                value={value}
                onChange={setValue}
                placeholder="Escribe tu mensaje aquí..."
                rows={4}
            />
        );
    },
};
