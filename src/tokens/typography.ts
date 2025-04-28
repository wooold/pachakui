/**
 * 🔤 Design Tokens – Typography (PachakUI)
 * Estructura escalable y modular para fuentes, tamaños, pesos, interlíneas, tracking y estilos de texto.
 * Basado en principios de Apple HIG y Stripe. Línea base de 150% para fluidez visual.
 */

// 1. Font families (incluye fallback para mono)
export const fontFamilies = {
  sans: "'Inter', sans-serif",                       // Tipografía principal para todo el sistema
  mono: "'Fira Code', 'Menlo', monospace",           // Fuente monoespaciada amigable y universal
};

// 2. Font sizes (en rem, con equivalencia comentada)
export const fontSizes = {
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  md: '1rem',        // 16px (base)
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
};

// 3. Font weights
export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

// 4. Line heights (se usa solo 'normal' para todos los casos → 150%)
export const lineHeights = {
  normal: '1.5',  // 150%
};

// 5. Letter spacing (tracking ajustado para jerarquía y legibilidad)
export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

// 6. Text styles — Jerarquía completa con lineHeight = 150%
export const textStyles = {
  heading3xl: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes['5xl'],         // 48px
    lineHeight: lineHeights.normal,     // 72px
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.tight,
  },
  heading2xl: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes['4xl'],         // 36px
    lineHeight: lineHeights.normal,     // 54px
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.tight,
  },
  headingXl: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes['3xl'],         // 30px
    lineHeight: lineHeights.normal,     // 45px
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.normal,
  },
  headingLg: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes['2xl'],         // 24px
    lineHeight: lineHeights.normal,     // 36px
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacings.normal,
  },
  bodyLarge: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.lg,             // 18px
    lineHeight: lineHeights.normal,     // 27px
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacings.normal,
  },
  bodyBase: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.md,             // 16px
    lineHeight: lineHeights.normal,     // 24px
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacings.normal,
  },
  bodySmall: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.sm,             // 14px
    lineHeight: lineHeights.normal,     // 21px
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacings.wide,
  },
  labelSm: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.xs,             // 12px
    lineHeight: lineHeights.normal,     // 18px
    fontWeight: fontWeights.medium,
    letterSpacing: letterSpacings.wide,
  },
  monoSm: {
    fontFamily: fontFamilies.mono,
    fontSize: fontSizes.xs,             // 12px
    lineHeight: lineHeights.normal,     // 18px
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacings.normal,
  },
};
