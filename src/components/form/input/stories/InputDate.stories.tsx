import type { Meta, StoryObj } from '@storybook/react';
import { InputDate } from '../InputDate';

const meta: Meta<typeof InputDate> = {
    title: 'Components/Form/Input/Date',
    component: InputDate,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputDate>;

export const Default: Story = {
    args: {
        size: 'md',
        placeholder: 'Selecciona una fecha',
    },
};
