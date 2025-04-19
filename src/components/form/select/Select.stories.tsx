import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Form/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState('peru');

        const options = [
            { label: 'Perú', value: 'peru' },
            { label: 'México', value: 'mexico' },
            { label: 'Argentina', value: 'argentina' },
        ];

        return (
            <Select
                value={value}
                onChange={setValue}
                options={options}
            />
        );
    },
};
