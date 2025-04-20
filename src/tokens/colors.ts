import { primitives } from '@tokens/colors-primitives';

export const colors = {
  brand: {
<<<<<<< HEAD
<<<<<<< Updated upstream
    primary: '#4887fb', // azul Pachakui
=======
    primary: primitives.blue500,
>>>>>>> Stashed changes
=======
    primary: '#4887fb',       // Azul Pachakui
    hover: '#2c6ef2',         // Azul ligeramente más oscuro (hover)
    active: '#1f54c0',        // Azul más profundo (click)
>>>>>>> origin/main
  },

  neutral: {
    white: primitives.white,
    soft: primitives.gray50,
    background: primitives.gray100,
    border: primitives.gray200,
    muted: primitives.gray400,
  },

  text: {
<<<<<<< HEAD
<<<<<<< Updated upstream
    primary: '#222f3e',   // charcoal
    secondary: '#4b5563', // graphite
    muted: '#9ca3af',     // gris más suave
=======
    primary: '#222f3e',     // charcoal
    secondary: '#4b5563',   // graphite
    muted: '#9ca3af',       // gris más suave
    onPrimary: '#ffffff',   // texto sobre botón primario
    onSecondary: '#4887fb', // texto sobre fondo blanco con borde azul
  },

  // 🎨 Fondos globales
  background: {
    base: '#ffffff', // fondo base
>>>>>>> origin/main
  },

  // 🛡️ Feedback visual del sistema
=======
    primary: primitives.black,
    muted: primitives.gray400,
  },

>>>>>>> Stashed changes
  feedback: {
    error: primitives.red500,
    success: primitives.green500,
  },

  control: {
    on: primitives.blue500,        // mismo que brand.primary
    off: primitives.gray300,       // mejor contraste para apagado
    knob: primitives.white,
    disabled: primitives.gray100,
  },

  transparent: primitives.transparent,
};
