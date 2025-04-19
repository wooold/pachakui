import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button/Feedback',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Disabled: Story = {
    args: {
        label: 'Deshabilitado',
        variant: 'primary',
        size: 'md',
        disabled: true,
    },
};
