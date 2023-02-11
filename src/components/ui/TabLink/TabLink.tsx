import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './TabLink.module.scss';
import cx from 'classnames';
import { TabLinkProps } from './TabLink.type';

export const TabLink: FC<TabLinkProps> = ({ type = '', title }) => {
  return (
    <Link
      className={cx(styles.tabLink, styles[type])}
      to={''}
      onClick={(evt: React.MouseEvent) => evt.preventDefault()}
    >
      {title}
    </Link>
  );
};
