import React, { FC } from 'react';
import { TableNameProps } from './TableName.types';
import styles from './TableName.module.scss'



export const TableName: FC<TableNameProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <h1  className={styles.title}>{name}</h1>
    </div>
  );
};
