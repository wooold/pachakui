// src/tokens/theme/cursors/cursors.ts

/**
 * 🖱️ Tokens de Cursores – PachakUI
 * Definen los estilos de cursor usados en componentes interactivos.
 */
export const cursors = {
    // Cursor estándar para elementos clicables (botones, enlaces, etc.)
    pointer: 'pointer',

    // Cursor que indica que una acción no está permitida
    notAllowed: 'not-allowed',

    // Cursor para elementos que se pueden arrastrar
    grab: 'grab',

    // Cursor mientras se está arrastrando un elemento
    grabbing: 'grabbing',

    // Cursor para campos de texto editables
    text: 'text',

    // Cursor estándar por defecto
    default: 'default',
} as const; // 🔥 Tipado fuerte e inmutabilidad

/**
 * 📚 Tipo derivado para autocompletado en componentes
 */
export type CursorType = keyof typeof cursors;
