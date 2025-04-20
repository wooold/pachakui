import React from 'react';
import { sizeMap } from '@utils/sizemap';
import { colors } from '@tokens/colors';

export interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({
  children,
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
}: ButtonProps) => {
  const {
    paddingX,
    paddingY,
    fontSize,
    gap,
    icon: iconSize,
    borderRadius,
  } = sizeMap[size];

  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap,
        padding: `${paddingY} ${paddingX}`,
        fontSize,
        fontWeight: 500,
        lineHeight: 1.2,
        borderRadius,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        backgroundColor: colors.control.default,
        color: colors.text.inverse,
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
