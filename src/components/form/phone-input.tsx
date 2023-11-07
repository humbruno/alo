import 'react-phone-number-input/style.css';
import type { DefaultInputComponentProps } from 'react-phone-number-input';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
import { useState } from 'react';

type FormPhoneInputProps = DefaultInputComponentProps;

export const FormPhoneInput = ({ name, ...rest }: FormPhoneInputProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = useState<any>();

  return (
    <PhoneInputWithCountry
      name={name}
      value={value}
      onChange={setValue}
      {...rest}
    />
  );
};

FormPhoneInput.displayName = 'FormPhoneInput';
