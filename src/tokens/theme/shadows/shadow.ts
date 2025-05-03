/**
 * 🌫️ Design Tokens - Shadows
 * Niveles de elevación para UI components como cards, modals, tooltips
 */

export const shadows = {
  none: 'none',

  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',

  // 🔵 Focus Ring accesible
  focus: '0 0 0 3px rgba(72, 135, 251, 0.4)',
} as const; // 🔥 Protege los tokens contra mutaciones accidentales

/**
 * 📚 Tipos derivados automáticos
 */
export type ShadowLevel = keyof typeof shadows;
