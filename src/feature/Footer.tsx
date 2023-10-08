import { FC, ReactNode } from 'react';

import Card from '../common/Card';

export interface FooterProps {
  children: ReactNode;
}

const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <Card isFullWidth>
      <div className="p-4 flex items-center gap-10 w-full">{children}</div>
      <span className="text-xs text-gray-500 text-center">
        <a href="https://www.nasa.gov/">Associated with NASA</a>
      </span>
    </Card>
  );
};

export default Footer;
