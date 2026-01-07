export interface ComponentProps {
  className?: string;
}

export interface ButtonHTMLAttributes {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export interface CardProps {
  hover?: boolean;
  onClick?: () => void;
}

export interface InputHTMLAttributes {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}