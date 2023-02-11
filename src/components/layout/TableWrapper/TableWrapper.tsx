import React, { FC } from 'react';
import { TableWrapperProps } from './TableWrapper.types';
import styles from './TableWrapper.module.scss'

export const TableWrapper: FC<TableWrapperProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
