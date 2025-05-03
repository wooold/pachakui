// src/tokens/theme/breakpoints/breakpoints.ts

/**
 * 📱 Breakpoints oficiales de PachakUI
 * Definimos puntos de quiebre siguiendo estándares de sistema de diseño moderno.
 */
export const breakpoints = {
    sm: '640px',   // Small devices (móviles)
    md: '768px',   // Medium devices (tablets)
    lg: '1024px',  // Large devices (laptops/desktops)
    xl: '1280px',  // Extra large devices (desktops grandes)
} as const;

/**
 * 🖼️ Contenedor máximo para layouts
 */
export const containers = {
    default: breakpoints.xl,
} as const;

/**
 * 🎯 Media queries listas para usar
 */
export const mediaQueries = {
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
} as const;

/**
 * 📚 Tipos derivados automáticos
 */
export type Breakpoint = keyof typeof breakpoints;
export type MediaQuery = keyof typeof mediaQueries;
