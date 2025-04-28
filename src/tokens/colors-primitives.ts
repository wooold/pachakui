/**
 * 🎨 Color Primitives - PachakUI Design System
 * Paleta atómica escalable con soporte para light y dark mode.
 * No contiene lógica semántica ni roles (eso va en colors.ts).
 */

export const primitives = {
    // 🔵 Blues (Primary brand scale)
    blue50: '#E6F3FF',
    blue100: '#CCE7FF',
    blue200: '#99CFFF',
    blue300: '#66B8FF',
    blue400: '#33A0FF',
    blue500: '#2C8EFF', // Primary base
    blue600: '#207FE6',
    blue700: '#186BCC',
    blue800: '#125BB3',
    blue900: '#0A4599',

    // 🟣 Deep Accent (Complementary brand tone)
    indigo500: '#4E44CE',

    // ⚪ Grays (Neutral scale for backgrounds, borders, text)
    gray0: '#FFFFFF',   // Absolute white
    gray50: '#F9FAFB',   // Softest background
    gray100: '#F6F8FA',   // Silver (UI backgrounds)
    gray200: '#E1E5EA',   // Light borders
    gray300: '#C4CBD4',
    gray400: '#A1A9B4',
    gray500: '#8A94A3',
    gray600: '#6F7786',
    gray700: '#555C6B',
    gray800: '#3B404D',
    gray900: '#222F3E',   // Charcoal
    gray950: '#0D1117',   // True black for dark backgrounds

    // ✅ Feedback: Success, Info, Warning, Error
    green100: '#D6F5E4',  // Light for dark bg
    green500: '#28C76F',  // Success

    blueInfo100: '#D6ECFF',  // Light for dark bg
    blueInfo500: '#0090F1',  // Info

    yellow100: '#FFF3CD', // Light for dark bg
    yellow500: '#FFC107', // Warning

    red100: '#FADBD8',     // Light for dark bg
    red500: '#EA5455',     // Error

    // ✨ Accent Colors (emotion, expression)
    lilac500: '#DAB6FA',
    horizon500: '#5CC5B8',
    synkuyBlue: '#4887FB',
    skyGradient: '#5F84F6',

    // ☁️ Backgrounds & Surfaces (Light Mode)
    backgroundBase: '#F9FAFB',      // App background
    surface: '#FFFFFF',             // Cards, containers
    overlay: 'rgba(0, 0, 0, 0.04)', // Tooltips, modals

    // 🌒 Backgrounds & Surfaces (Dark Mode)
    backgroundDark: '#121212',          // App background in dark
    surfaceDark: '#1E1E1E',             // Cards in dark
    overlayDark: 'rgba(255, 255, 255, 0.06)', // Soft light overlay

    // 🖋 Text on dark (used in semantic mappings)
    textOnDark: '#F5F5F5',        // High contrast text on dark bg
    mutedOnDark: '#C2C2C2',       // Secondary text

    // 🎭 Utility
    transparent: 'transparent',
    current: 'currentColor',
};
