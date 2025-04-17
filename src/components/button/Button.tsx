import './Button.css';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
}: ButtonProps) => {
  const className = `pachakui-button ${variant} ${size}`;
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
