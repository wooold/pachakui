import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => {
        const [checked, setChecked] = useState(false);

        return (
            <Checkbox
                label="Acepto los términos y condiciones"
                checked={checked}
                onChange={setChecked}
            />
        );
    },
};
