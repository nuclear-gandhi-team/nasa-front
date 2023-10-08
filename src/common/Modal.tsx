import { FC, ReactNode } from 'react';

import Card from './Card';

export interface ModalProps {
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className="flex fixed h-screen w-screen justify-center items-center backdrop-blur-xl">
      <Card title="Register for alerts" isFullWidth>
        {children}
      </Card>
    </div>
  );
};

export default Modal;
