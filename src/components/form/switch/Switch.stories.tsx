import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
    title: 'Components/Form/Switch',
    component: Switch,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    render: () => {
        const [checked, setChecked] = useState(false);

        return (
            <Switch
                checked={checked}
                onChange={setChecked}
                label={`Switch ${checked ? 'activado' : 'desactivado'}`}
            />
        );
    },
};
