import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Form/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    args: {
        id: 'textarea-1',
        placeholder: 'Cuéntanos tu historia...',
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const Preloaded: Story = {
    args: {
        value: 'Recuerdo claramente ese día...',
    },
};
