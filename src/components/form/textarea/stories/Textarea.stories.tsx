import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Form/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Small: Story = {
    args: {
        placeholder: 'Comentario pequeño...',
        size: 'sm',
    },
};

export const Medium: Story = {
    args: {
        placeholder: 'Comentario mediano...',
        size: 'md',
    },
};

export const Large: Story = {
    args: {
        placeholder: 'Comentario grande...',
        size: 'lg',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Deshabilitado...',
        size: 'md',
        disabled: true,
    },
};
