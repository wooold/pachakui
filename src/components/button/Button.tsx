'use client';

// 📁 src/components/button/Button.tsx

import React, { useState, useEffect } from 'react';
import { buttonVariantMap } from './variants/variantMap';
import { sizeMap } from '@utils/sizemap';
import { useTheme } from '@/context/ThemeProvider';
import { useFocusRing } from '@/hooks/useFocusRing'; // 🎯 Nuevo hook para manejar focus correctamente
import { LucideIcon, Loader2 } from 'lucide-react';

// 🎯 Tipado de props
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: keyof typeof buttonVariantMap;
  size?: keyof typeof sizeMap;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
}

// 🎯 Componente principal
export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft: IconLeft,
  iconRight: IconRight,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { mode } = useTheme(); // 🎯 Detectamos el modo light/dark
  const { focusRingStyle } = useFocusRing(); // 🎯 Hook que maneja focus visual de forma profesional

  // 🌀 Agregamos keyframes de animación para spinner loading una sola vez
  useEffect(() => {
    const styleId = 'button-spin-keyframes';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // 🎯 Estilos dinámicos basado en variante y modo
  const getVariantStyles = () => {
    const variantStyles = buttonVariantMap[variant];
    if (!variantStyles) {
      console.warn(`Button: variant "${variant}" no encontrado en buttonVariantMap`);
      return buttonVariantMap.primary.light;
    }
    return (variantStyles as { light: any; dark: any })[mode];
  };

  const getCurrentColor = () => {
    const variantStyles = getVariantStyles();
    if (disabled) return variantStyles.background.disabled;
    if (loading) return variantStyles.background.loading;
    if (isActive) return variantStyles.background.active;
    if (isHovered) return variantStyles.background.hover;
    return variantStyles.background.default;
  };

  const getCurrentBorder = () => {
    const variantStyles = getVariantStyles();
    if (disabled) return variantStyles.border.disabled;
    if (loading) return variantStyles.border.loading;
    if (isActive) return variantStyles.border.active;
    if (isHovered) return variantStyles.border.hover;
    return variantStyles.border.default;
  };

  const getCurrentText = () => {
    const variantStyles = getVariantStyles();
    if (disabled) return variantStyles.text.disabled;
    if (loading) return variantStyles.text.loading;
    if (isActive) return variantStyles.text.active;
    if (isHovered) return variantStyles.text.hover;
    return variantStyles.text.default;
  };

  const variantStyles = getVariantStyles(); // 🎯 Para acceder a otros estilos como focusRing

  // 🎨 Estilos principales del botón
  const styles: React.CSSProperties = {
    backgroundColor: getCurrentColor(),
    border: `1px solid ${getCurrentBorder()}`,
    color: getCurrentText(),
    padding: `${sizeMap[size].paddingY} ${sizeMap[size].paddingX}`,
    fontSize: sizeMap[size].fontSize,
    borderRadius: sizeMap[size].borderRadius,
    minHeight: sizeMap[size].minHeight,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizeMap[size].gap,
    transition: 'all 0.2s ease-in-out',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    outline: 'none', // ❌ Eliminamos el outline feo
    ...focusRingStyle, // ✅ Aplicamos focus bonito controlado por useFocusRing
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={styles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: sizeMap[size].gap,
        }}
      >
        {/* 🎯 Icono izquierdo o spinner */}
        {loading ? (
          <Loader2
            size={sizeMap[size].iconSize}
            style={{
              display: 'inline-block',
              transformOrigin: 'center center',
              animation: 'spin 1s linear infinite',
            }}
          />
        ) : (
          IconLeft && <IconLeft size={sizeMap[size].iconSize} />
        )}

        {/* 🎯 Contenido del botón */}
        {children}

        {/* 🎯 Icono derecho si no está loading */}
        {!loading && IconRight && (
          <IconRight size={sizeMap[size].iconSize} />
        )}
      </div>
    </button>
  );
};
