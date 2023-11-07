import { type PropsWithChildren, type LabelHTMLAttributes } from 'react';
import { cn } from '../../utils';

type FormLabelProps = PropsWithChildren & LabelHTMLAttributes<HTMLLabelElement>;

export const FormLabel = ({ children, className, ...rest }: FormLabelProps) => {
  return (
    <label
      {...rest}
      className={cn('text-red text-body font-regular leading-lg', className)}
    >
      {children}
    </label>
  );
};

FormLabel.displayName = 'FormLabel';
