import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '../RadioButton';

const meta: Meta<typeof RadioButton> = {
    title: 'Components/Form/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        label: 'Opción A',
        value: 'A',
        name: 'example',
    },
};

export const Checked: Story = {
    args: {
        label: 'Opción seleccionada',
        value: 'B',
        checked: true,
        name: 'example',
    },
};

export const Disabled: Story = {
    args: {
        label: 'No editable',
        value: 'C',
        checked: true,
        disabled: true,
        name: 'example',
    },
};
