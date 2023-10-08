import { FC, HTMLAttributes, ReactNode } from 'react';

import styles from './Card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: ReactNode;
  isFullWidth?: boolean;
}

const Card: FC<CardProps> = ({ title, children, isFullWidth, ...rest }) => {
  const classes = isFullWidth
    ? `${styles.glass} ${styles.fullWidth}`
    : styles.glass;
  return (
    <div className={classes} {...rest}>
      <article className={styles.content}>
        <p className="font-bold text-2xl text-gray-200 m-2 opacity-60">
          {title}
        </p>
        {children}
      </article>
    </div>
  );
};

export default Card;
