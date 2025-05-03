// 📁 src/hooks/useSystemTheme.ts

import { useEffect, useState } from 'react';

/**
 * 🌓 useSystemTheme
 * Detecta el tema del sistema operativo del usuario (light o dark).
 * Se mantiene sincronizado si el usuario cambia su configuración.
 */
export const useSystemTheme = (): 'light' | 'dark' => {
    const getSystemTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const [theme, setTheme] = useState<'light' | 'dark'>(getSystemTheme);

    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = () => setTheme(getSystemTheme());
        media.addEventListener('change', listener);

        return () => media.removeEventListener('change', listener);
    }, []);

    return theme;
};
