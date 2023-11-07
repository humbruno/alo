import { type PropsWithChildren, type HtmlHTMLAttributes } from 'react';
import { cn } from '../../utils';

type FormGroupProps = PropsWithChildren & HtmlHTMLAttributes<HTMLDivElement>;

export const FormGroup = ({ children, className, ...rest }: FormGroupProps) => {
  return (
    <div {...rest} className={cn('flex flex-1 flex-col gap-2', className)}>
      {children}
    </div>
  );
};

FormGroup.displayName = 'FormGroup';
