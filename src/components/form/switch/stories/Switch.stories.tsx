import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../Switch';

const meta: Meta<typeof Switch> = {
    title: 'Components/Form/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Small: Story = {
    args: {
        checked: false,
        size: 'sm',
    },
};

export const Medium: Story = {
    args: {
        checked: true,
        size: 'md',
    },
};

export const Large: Story = {
    args: {
        checked: false,
        size: 'lg',
    },
};

export const Disabled: Story = {
    args: {
        checked: true,
        size: 'md',
        disabled: true,
    },
};
