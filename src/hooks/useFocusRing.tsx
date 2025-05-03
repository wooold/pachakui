// 📁 src/hooks/useFocusRing.tsx

import { useState, useEffect, useCallback } from 'react';
import { shadows } from '@/tokens/theme/shadows/shadow'; // 🎯 Importamos el token focus

/**
 * 🎯 Hook que maneja focus visual accesible (Keyboard vs Mouse)
 */
export const useFocusRing = () => {
    const [isFocusVisible, setIsFocusVisible] = useState(false);

    // Detectamos navegación por teclado
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Tab') {
            setIsFocusVisible(true);
        }
    }, []);

    // Detectamos navegación por mouse
    const handleMouseDown = useCallback(() => {
        setIsFocusVisible(false);
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, [handleKeyDown, handleMouseDown]);

    return {
        focusRingStyle: isFocusVisible ? { boxShadow: shadows.focus } : { boxShadow: 'none' },
        isFocusVisible,
    };
};
