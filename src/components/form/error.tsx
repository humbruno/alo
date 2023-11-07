import type { PropsWithChildren, HtmlHTMLAttributes } from 'react';
import { cn } from '../../utils';

type FormErrorProps = PropsWithChildren &
  HtmlHTMLAttributes<HTMLParagraphElement>;

export const FormError = ({ children, className }: FormErrorProps) => {
  return (
    <p
      className={cn(
        'text-sm font-semi-bold leading-sm text-red-700',
        className
      )}
    >
      {children}
    </p>
  );
};

FormError.displayName = 'FormError';
