import { AnchorHTMLAttributes, FC, ReactNode } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <a
      className="block mt-4 lg:inline-block lg:mt-0 text-sky-300 hover:text-white mr-4"
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
