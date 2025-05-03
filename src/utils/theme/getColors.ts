// 📁 src/utils/theme/getColors.ts

import { colors } from '@/tokens/theme/colors/colors'; // ✅ Ahora solo importamos colors unificado

// 🎯 Definimos los modos disponibles
export type ThemeMode = 'light' | 'dark';

/**
 * 🎨 Obtiene el conjunto de colores según el tema activo
 * @param mode 'light' | 'dark'
 * @returns Colores específicos para el tema
 */
export const getColors = (mode: ThemeMode = 'light') => {
    return colors[mode] || colors.light;
};
