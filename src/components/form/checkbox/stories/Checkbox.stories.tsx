import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'toggled' },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: 'Acepto los términos',
        checked: false,
    },
};

export const Checked: Story = {
    args: {
        label: 'Estoy de acuerdo',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'No editable',
        checked: true,
        disabled: true,
    },
};
