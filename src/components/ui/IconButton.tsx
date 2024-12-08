import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function IconButton({ 
  icon, 
  variant = 'secondary',
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        'flex items-center justify-center rounded-full transition-all duration-200',
        variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
        variant === 'secondary' && 'text-primary hover:bg-gray-100',
        props.disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {icon}
    </button>
  );
}