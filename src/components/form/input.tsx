import React from 'react';
import { type InputHTMLAttributes } from 'react';
import { cn } from '../../utils';

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        className={cn(
          'border border-solid border-light-gray bg-white px-4 py-2 text-dark placeholder-dark-gray',
          className
        )}
      />
    );
  }
);
FormInput.displayName = 'FormInput';
