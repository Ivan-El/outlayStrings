import React, { FC } from 'react';
import styles from './FormInput.module.scss';
import { FormInputProps } from './FormInput.types';

export const FormInput: FC<FormInputProps> = ({
  editing,
  name,
  rowData,
  dataKey,
  setRowData,
  type,
}) => {
  return (
    <input
      name={name}
      className={styles.input}
      type={type}
      value={String(`${rowData[dataKey]}`)}
      disabled={!editing}
      onChange={(evt) =>
        setRowData((state) =>
          type === 'text'
            ? { ...state, [dataKey]: evt.target.value }
            : { ...state, [dataKey]: +evt.target.value }
        )
      }
    />
  );
};
