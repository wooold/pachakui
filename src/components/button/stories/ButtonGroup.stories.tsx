import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa';

const meta: Meta<typeof Button> = {
    title: 'Components/Button/Group',
    component: Button,
    tags: ['visual-test'],
};

export default meta;
type Story = StoryObj<typeof Button>;

const Row = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: '24px' }}>
        <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>{title}</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>{children}</div>
    </div>
);

export const AllSizesAndVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <Row title="Small (sm)">
                <Button size="sm" variant="primary">Primario</Button>
                <Button size="sm" variant="secondary">Secundario</Button>
                <Button size="sm" variant="ghost">Ghost</Button>
                <Button size="sm" variant="secondary" iconLeft={<FcGoogle />}>Google</Button>
                <Button size="sm" variant="primary" iconRight={<FaArrowRight />}>Siguiente</Button>
            </Row>

            <Row title="Medium (md)">
                <Button size="md" variant="primary">Primario</Button>
                <Button size="md" variant="secondary">Secundario</Button>
                <Button size="md" variant="ghost">Ghost</Button>
                <Button size="md" variant="secondary" iconLeft={<FcGoogle />}>Google</Button>
                <Button size="md" variant="primary" iconRight={<FaArrowRight />}>Siguiente</Button>
            </Row>

            <Row title="Large (lg)">
                <Button size="lg" variant="primary">Primario</Button>
                <Button size="lg" variant="secondary">Secundario</Button>
                <Button size="lg" variant="ghost">Ghost</Button>
                <Button size="lg" variant="secondary" iconLeft={<FcGoogle />}>Google</Button>
                <Button size="lg" variant="primary" iconRight={<FaArrowRight />}>Siguiente</Button>
            </Row>

            <Row title="Disabled">
                <Button size="md" variant="primary" disabled>Primario</Button>
                <Button size="md" variant="secondary" disabled>Secundario</Button>
                <Button size="md" variant="ghost" disabled>Ghost</Button>
            </Row>
        </div>
    ),
};
