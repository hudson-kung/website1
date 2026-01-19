import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
};

const Card = ({
  children,
  className = '',
  hoverEffect = false,
  shadow = 'md',
  ...props
}: CardProps) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg overflow-hidden';
  const shadowClass = shadow !== 'none' ? `shadow-${shadow}` : '';
  const hoverClass = hoverEffect ? 'transition-transform duration-300 hover:-translate-y-1' : '';
  
  return (
    <div 
      className={`${baseClasses} ${shadowClass} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

type CardHeaderProps = {
  children: ReactNode;
  className?: string;
};

const CardHeader = ({ children, className = '' }: CardHeaderProps) => (
  <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

type CardBodyProps = {
  children: ReactNode;
  className?: string;
};

const CardBody = ({ children, className = '' }: CardBodyProps) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

const CardFooter = ({ children, className = '' }: CardFooterProps) => (
  <div className={`px-6 py-4 bg-gray-50 dark:bg-gray-700/50 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
