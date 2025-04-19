import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
    args: {
        children: 'Acción pequeña',
        size: 'sm',
        variant: 'primary',
    },
};

export const SmallWithIcon: Story = {
    args: {
        children: 'Google',
        size: 'sm',
        variant: 'secondary',
        iconLeft: <FcGoogle />,
    },
};

export const Medium: Story = {
    args: {
        children: 'Continuar',
        size: 'md',
        variant: 'primary',
    },
};

export const MediumWithIcon: Story = {
    args: {
        children: 'Continuar con Google',
        size: 'md',
        variant: 'secondary',
        iconLeft: <FcGoogle />,
    },
};

export const MediumRightIcon: Story = {
    args: {
        children: 'Siguiente',
        size: 'md',
        variant: 'primary',
        iconRight: <FaArrowRight />,
    },
};

export const Large: Story = {
    args: {
        children: 'Acción grande',
        size: 'lg',
        variant: 'primary',
    },
};

export const LargeWithIcon: Story = {
    args: {
        children: 'Google XL',
        size: 'lg',
        variant: 'secondary',
        iconLeft: <FcGoogle />,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Deshabilitado',
        size: 'md',
        variant: 'primary',
        disabled: true,
    },
};
