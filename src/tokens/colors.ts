/**
 * 🎨 Design Tokens - Colors
 * Estructura semántica para una paleta escalable y funcional
 */

export const colors = {
  // 🎯 Colores principales de marca
  brand: {
    primary: '#4887fb',       // Azul Pachakui
    hover: '#2c6ef2',         // Azul ligeramente más oscuro (hover)
    active: '#1f54c0',        // Azul más profundo (click)
  },

  // 🌫️ Neutrales reutilizables para fondos, bordes y layouts
  neutral: {
    white: '#ffffff',
    soft: '#f9fafb',
    border: '#e0e0e0',
    graphite: '#4b5563',
    charcoal: '#222f3e',
    black: '#000000',
  },

  // 🖋️ Colores pensados para el texto
  text: {
    primary: '#222f3e',     // charcoal
    secondary: '#4b5563',   // graphite
    muted: '#9ca3af',       // gris más suave
    onPrimary: '#ffffff',   // texto sobre botón primario
    onSecondary: '#4887fb', // texto sobre fondo blanco con borde azul
  },

  // 🎨 Fondos globales
  background: {
    base: '#ffffff', // fondo base
  },

  // 🛡️ Feedback visual del sistema
  feedback: {
    success: '#22c55e',  // verde
    error: '#ef4444',    // rojo
    warning: '#f59e0b',  // naranja
    info: '#3b82f6',     // azul informativo
  },
};
