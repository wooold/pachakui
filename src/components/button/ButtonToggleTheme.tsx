// 📁 src/components/button/ButtonToggleTheme.tsx

'use client';

import { Button } from '@/components/button/Button';
import { useTheme } from '@/context/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export const ButtonToggleTheme = () => {
    const { mode, setMode } = useTheme();

    const toggleTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    const IconLeft = mode === 'light' ? Moon : Sun;

    return (
        <Button
            onClick={toggleTheme}
            variant="secondary" // 🎯 Puedes cambiarlo si quieres primary, ghost, etc.
            size="md"           // 🎯 Tamaño del botón consistente
            iconLeft={IconLeft}
        >
            {mode === 'light' ? 'Oscuro' : 'Claro'}
        </Button>
    );
};
