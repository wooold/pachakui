import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input';
import { FiSearch, FiEye } from 'react-icons/fi';

const meta: Meta<typeof Input> = {
    title: 'Components/Form/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Small: Story = {
    args: {
        placeholder: 'Input pequeño',
        size: 'sm',
    },
};

export const Medium: Story = {
    args: {
        placeholder: 'Input mediano',
        size: 'md',
    },
};

export const Large: Story = {
    args: {
        placeholder: 'Input grande',
        size: 'lg',
    },
};

export const WithLeftIcon: Story = {
    args: {
        placeholder: 'Buscar...',
        size: 'md',
        iconLeft: <FiSearch />,
    },
};

export const WithRightIcon: Story = {
    args: {
        placeholder: 'Contraseña',
        size: 'md',
        iconRight: <FiEye />,
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Deshabilitado',
        size: 'md',
        disabled: true,
    },
};
