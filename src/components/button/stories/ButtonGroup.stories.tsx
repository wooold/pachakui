import React from 'react';
import { Button } from '../../button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa';

const meta: Meta = {
    title: 'Components/ButtonGroup',
    component: Button,
};

export default meta;

type Story = StoryObj;

export const PrimaryGroup: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px' }}>
            <Button>
                <FcGoogle style={{ marginRight: '8px' }} /> Google
            </Button>
            <Button>
                Continuar <FaArrowRight style={{ marginLeft: '8px' }} />
            </Button>
        </div>
    ),
};
