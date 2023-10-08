import { FC, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  htmlFor: string;
  id: string;
  label: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  htmlFor,
  id,
  label,
  ...rest
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="bg-transparent border border-gray-300 text-gray-200 text-sm rounded-lg block w-full p-2.5 hover:ring-gray-200"
        placeholder={placeholder}
        required
        {...rest}
      />
    </div>
  );
};

export default Input;
