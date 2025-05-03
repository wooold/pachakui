/**
 * 🟦 Design Tokens - Borders
 * Radios y grosores para contornos, inputs, botones, tarjetas, etc.
 */

export const borders = {
  radius: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px', // para chips, toggles o circulares
  },
  width: {
    none: '0px',
    thin: '1px',
    thick: '2px',
  },
} as const; // 🔥 Tipado fuerte e inmutabilidad garantizada

/**
 * 📚 Tipos derivados automáticos
 */
export type BorderRadius = keyof typeof borders.radius;
export type BorderWidth = keyof typeof borders.width;
