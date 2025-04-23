/**
 * 🌗 getColors.ts
 * Devuelve el objeto de colores semánticos según el tema activo.
 * Este archivo permite preparar tu sistema para el modo dark/light sin alterar componentes.
 */

import { lightColors, darkColors } from './colors';

export type ThemeMode = 'light' | 'dark';

/**
 * 🧠 Función que selecciona los colores en base al tema
 * Por defecto usa 'light' si no se indica nada.
 */
export const getColors = (mode: ThemeMode = 'light') => {
    return mode === 'dark' ? darkColors : lightColors;
};
