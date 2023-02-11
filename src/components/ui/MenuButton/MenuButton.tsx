import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuButton.module.scss';

export const MenuButton: FC = () => {
  return (
    <Link
      className={styles.menuButton}
      to={''}
      onClick={(evt: React.MouseEvent) => evt.preventDefault()}
    />
  );
};
