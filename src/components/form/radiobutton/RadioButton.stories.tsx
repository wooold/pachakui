import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
    title: 'Components/Form/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    render: () => {
        const [selected, setSelected] = useState('option1');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <RadioButton
                    label="Opción 1"
                    name="demo"
                    value="option1"
                    checked={selected === 'option1'}
                    onChange={setSelected}
                />
                <RadioButton
                    label="Opción 2"
                    name="demo"
                    value="option2"
                    checked={selected === 'option2'}
                    onChange={setSelected}
                />
                <RadioButton
                    label="Opción 3"
                    name="demo"
                    value="option3"
                    checked={selected === 'option3'}
                    onChange={setSelected}
                />
            </div>
        );
    },
};
