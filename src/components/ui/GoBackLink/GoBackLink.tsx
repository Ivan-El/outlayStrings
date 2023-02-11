import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './GoBackLink.module.scss';

export const GoBackLink: FC = () => {
  return (
    <Link
      to={''}
      className={styles.backLink}
      onClick={(evt: React.MouseEvent) => evt.preventDefault()}
    />
  );
};
