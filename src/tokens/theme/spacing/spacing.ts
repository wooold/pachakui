// 📁 src/tokens/theme/spacing/spacing.ts
/**
 * 📏 Design Tokens - Spacing
 * Escala coherente basada en múltiplos de 4px
 * Usada para paddings, margins, gaps, etc.
 */

export const spacing = {
  none: '0px',
  xs: '4px',       // Extra small
  sm: '8px',       // Small
  smPlus: '12px',  // Small Plus – útil para componentes con más contenido
  md: '16px',      // Medium
  mdPlus: '20px',  // Medium Plus – común en botones grandes con íconos
  lg: '24px',      // Large
  xl: '32px',      // Extra large
  '2xl': '40px',   // 2x Extra large
  '3xl': '48px',   // 3x Extra large
} as const; // 🔥 Bloquea mutaciones accidentales y permite tipos literales automáticos

/**
 * 📚 Tipo generado automáticamente a partir de las keys de spacing
 */
export type Spacing = keyof typeof spacing;
