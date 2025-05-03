/**
 * 🧩 Tamaños estándar de íconos – PachakUI
 * Usados en botones, inputs, selectores, etc.
 */
export const iconSize = {
    sm: '14px',
    md: '16px',
    lg: '18px',
} as const; // 🔥 Tipado fuerte y seguro

/**
 * 📚 Tipo derivado automático
 */
export type IconSize = keyof typeof iconSize;
