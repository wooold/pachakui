import type { Meta, StoryObj } from '@storybook/react';
import { InputSearch } from '../InputSearch';

const meta: Meta<typeof InputSearch> = {
    title: 'Components/Form/Input/Search',
    component: InputSearch,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputSearch>;

export const Default: Story = {
    args: {
        placeholder: 'Buscar productos, categorías...',
        size: 'md',
    },
};
