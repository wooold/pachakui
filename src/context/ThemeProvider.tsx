// 📁 src/context/ThemeProvider.tsx

'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { colors } from '@/tokens/theme/colors/colors';
import { useSystemTheme } from '@/context/useSystemTheme'; // 🎯 Hook que detecta el tema del sistema operativo

// 🎯 Definimos tipos disponibles
type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
    themeFromStorybook?: 'light' | 'dark' | 'system'; // 🎯 Nuevo: Tema manual enviado desde Storybook
}

// 🎯 Creamos el contexto de tema
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// 🎯 Hook para consumir el contexto
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
    }
    return context;
};

// 🎯 ThemeProvider principal
export const ThemeProvider = ({ children, themeFromStorybook = 'system' }: ThemeProviderProps) => {
    const systemTheme = useSystemTheme(); // Detectamos automáticamente el tema del sistema
    const [mode, setMode] = useState<ThemeMode>('light');

    // 🛠 Función que aplica todos los tokens como variables CSS
    const applyThemeVariables = (themeMode: ThemeMode) => {
        const root = document.documentElement;
        const themeColors = colors[themeMode];

        for (const category in themeColors) {
            const colorGroup = themeColors[category as keyof typeof themeColors];

            if (typeof colorGroup === 'object' && colorGroup !== null) {
                for (const key in colorGroup) {
                    const value = (colorGroup as any)[key];
                    root.style.setProperty(`--${category}-${key}`, value);
                }
            }
        }

        // Cambiamos también el fondo general de la página
        document.body.style.backgroundColor = themeColors.background.surface;
    };

    // 🎯 Detectamos y aplicamos el tema inicial y cuando cambie
    useEffect(() => {
        let targetMode: ThemeMode;

        // 🎯 Nueva lógica: respetar prioridad de Storybook
        if (themeFromStorybook === 'light' || themeFromStorybook === 'dark') {
            targetMode = themeFromStorybook;
        } else {
            targetMode = systemTheme;
        }

        setMode(targetMode);
        applyThemeVariables(targetMode);

    }, [systemTheme, themeFromStorybook]); // 🎯 Actualizamos cuando cambia el tema del sistema o Storybook

    // 🎯 Cada vez que mode cambia manualmente
    useEffect(() => {
        applyThemeVariables(mode);
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
