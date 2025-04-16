import './Button.css';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
}: ButtonProps) => (
  <button className={`pachakui-button ${variant} ${size}`} onClick={onClick}>
    {label}
  </button>
);
