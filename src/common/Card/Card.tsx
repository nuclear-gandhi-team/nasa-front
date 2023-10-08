import { FC, ReactNode } from 'react';

import styles from './Card.module.scss';

export interface CardProps {
  title?: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className={styles.glass}>
      <article className={styles.content}>
        <p className="font-bold text-6xl text-gray-200 m-2">{title}</p>
        {children}
      </article>
    </div>
  );
};

export default Card;
