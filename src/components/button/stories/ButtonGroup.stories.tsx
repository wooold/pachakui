import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa';

const meta: Meta<typeof Button> = {
    title: 'Components/Button/VisualGallery',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {(['sm', 'md', 'lg'] as const).map((size) => (
                <div key={size}>
                    <h4 style={{ marginBottom: '8px' }}>
                        {size === 'sm' ? 'Small' : size === 'md' ? 'Medium' : 'Large'} ({size})
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        <Button size={size} variant="primary">
                            Primary
                        </Button>
                        <Button size={size} variant="secondary">
                            Secondary
                        </Button>
                        {/* Se eliminó "ghost", se reemplaza por "outline" */}
                        <Button size={size} variant="outline">
                            Outline
                        </Button>
                        <Button size={size} variant="primary" iconLeft={<FcGoogle />}>
                            Left Icon
                        </Button>
                        <Button size={size} variant="secondary" iconRight={<FaArrowRight />}>
                            Right Icon
                        </Button>
                        <Button
                            size={size}
                            variant="outline"
                            iconLeft={<FcGoogle />}
                            iconRight={<FaArrowRight />}
                        >
                            Both Icons
                        </Button>
                        <Button size={size} disabled variant="primary">
                            Disabled
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    ),
};
