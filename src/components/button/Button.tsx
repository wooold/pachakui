import React from 'react';
import { sizeMap } from '@utils/sizemap';
import { buttonVariants } from 'variantMap';

export interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void; // ✅ añadida para evitar errores en Storybook
}

export const Button = ({
  children,
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  variant = 'primary',
  onClick,
}: ButtonProps) => {
  const {
    paddingX,
    paddingY,
    fontSize,
    gap,
    icon: iconSize,
    borderRadius,
  } = sizeMap[size];

  const variantStyles = buttonVariants[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...variantStyles,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap,
        padding: `${paddingY} ${paddingX}`,
        fontSize,
        fontWeight: 500,
        lineHeight: 1.2,
        borderRadius,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'background-color 0.2s ease',
      }}
    >
      {iconLeft && (
        <span style={{ display: 'flex', width: iconSize, height: iconSize }}>
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span style={{ display: 'flex', width: iconSize, height: iconSize }}>
          {iconRight}
        </span>
      )}
    </button>
  );
};
