import React from 'react';
import { buttonVariants } from './variantMap'; // ✅ Ruta corregida
import { sizeMap } from '@utils/sizemap';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof sizeMap;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
}: ButtonProps) => {
  const styles = {
    ...buttonVariants[variant],
    padding: `${sizeMap[size].paddingY} ${sizeMap[size].paddingX}`,
    fontSize: sizeMap[size].fontSize,
    borderRadius: sizeMap[size].borderRadius,
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <button onClick={onClick} disabled={disabled} style={styles}>
      {children}
    </button>
  );
};
