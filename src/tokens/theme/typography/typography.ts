/**
 * 🔤 Design Tokens – Typography (PachakUI)
 * Estructura escalable y modular para fuentes, tamaños, pesos, interlíneas, tracking y estilos de texto.
 * Basado en principios de Apple HIG y Stripe. Línea base de 150% para fluidez visual.
 */

/* --- 1. Font Families --- */
export const fontFamilies = {
  sans: "'Inter', sans-serif",
  mono: "'Fira Code', 'Menlo', monospace",
} as const;

/* --- 2. Font Sizes (rem units) --- */
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
} as const;

/* --- 3. Font Weights --- */
export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/* --- 4. Line Heights --- */
export const lineHeights = {
  normal: '1.5', // 150%
} as const;

/* --- 5. Letter Spacings --- */
export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

/* --- 6. Text Styles --- */
export const textStyles = {
  heading3xl: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes['5xl'],
    lineHeight: lineHeights.normal,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.tight,
  },
  heading2xl: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights.normal,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.tight,
  },
  headingXl: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights.normal,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacings.normal,
  },
  headingLg: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights.normal,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacings.normal,
  },
  bodyLarge: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.normal,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacings.normal,
  },
  bodyBase: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.normal,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacings.normal,
  },
  bodySmall: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.normal,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacings.wide,
  },
  labelSm: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.normal,
    fontWeight: fontWeights.medium,
    letterSpacing: letterSpacings.wide,
  },
  monoSm: {
    fontFamily: fontFamilies.mono,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.normal,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacings.normal,
  },
} as const;

/* --- Tipos derivados automáticos --- */
export type FontFamily = keyof typeof fontFamilies;
export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type LineHeight = keyof typeof lineHeights;
export type LetterSpacing = keyof typeof letterSpacings;
export type TextStyleName = keyof typeof textStyles;
