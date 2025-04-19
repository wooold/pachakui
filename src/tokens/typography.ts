/**
 * 🔤 Design Tokens - Typography
 * Estructura semántica para fuente, tamaño, peso y espaciado de línea
 */

export const typography = {
  fontFamily: {
    base: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`,
    monospace: `'Menlo', monospace`, // opcional para código
  },

  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',     // equivale a 150%
    relaxed: '1.625',
    loose: '2',
  },
};
