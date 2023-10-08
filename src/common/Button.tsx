import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonSize {
  SMALL = 'text-sm',
  MEDIUM = 'text-md',
  LARGE = 'text-lg',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: ButtonSize;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, disabled, size, ...rest }) => {
  return (
    <button
      className={`${size} w-full inline-block text-sm px-4 py-2 leading-none border rounded text-gray-200 border-gray-200 hover:border-sky-300 hover:text-sky-300 mt-4 lg:mt-0 disabled:border-gray-700 disabled:text-gray-600`}
      disabled={disabled}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
