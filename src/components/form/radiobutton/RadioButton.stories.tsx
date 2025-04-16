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
    args: {
        label: 'Opción A',
        name: 'example',
        value: 'a',
        checked: false,
    },
};

export const Interactive = () => {
    const [selected, setSelected] = useState('a');
    return (
        <>
            <RadioButton
                label="Opción A"
                name="group"
                value="a"
                checked={selected === 'a'}
                onChange={setSelected}
            />
            <RadioButton
                label="Opción B"
                name="group"
                value="b"
                checked={selected === 'b'}
                onChange={setSelected}
            />
        </>
    );
};
