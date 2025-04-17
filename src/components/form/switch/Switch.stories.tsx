import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
    title: 'Components/Form/Switch',
    component: Switch,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    args: {
        label: 'Activar notificaciones',
        checked: false,
    },
};

export const Interactive: Story = {
    render: () => {
        const [active, setActive] = useState(false);
        return (
            <Switch
                checked={active}
                onChange={setActive}
                label={`Switch ${active ? 'activado' : 'desactivado'}`}
            />
        );
    },
};
