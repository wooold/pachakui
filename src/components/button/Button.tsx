import React from 'react';
import { colors, spacing, typography } from '@tokens';
import { sizeMap } from '@utils/sizemap';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  iconLeft,
  iconRight,
  variant = 'primary',
  size = 'md',
}) => {
  const {
    paddingX,
    paddingY,
    fontSize,
    icon: iconSize,
    gap,
  } = sizeMap[size];

  const stylesByVariant = {
    primary: {
      backgroundColor: colors.brand.primary,
      color: colors.text.onPrimary,
      border: 'none',
    },
    secondary: {
      backgroundColor: colors.neutral.background,
      color: colors.text.primary,
      border: `1px solid ${colors.brand.primary}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.text.primary,
      border: 'none',
    },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap,
        padding: `${paddingY} ${paddingX}`,
        fontSize,
        borderRadius: spacing.xs,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        ...stylesByVariant[variant],
      }}
    >
      {iconLeft && (
        <span style={{ width: iconSize, height: iconSize }}>{iconLeft}</span>
      )}
      {children}
      {iconRight && (
        <span style={{ width: iconSize, height: iconSize }}>{iconRight}</span>
      )}
    </button>
  );
};
