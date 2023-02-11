import React, { FC, useState } from 'react';
import styles from './LevelPanel.module.scss';
import { LevelPanelProps } from './LevelPanel.types';
import cx from 'classnames';
import { CreateRequest } from '../../../models/CreateRequest';

export const LevelPanel: FC<LevelPanelProps> = ({
  id = 0,
  create,
  deleteRow,
  level,
  depth,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const rowSheme: CreateRequest = {
    equipmentCosts: 0,
    estimatedProfit: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    parentId: null,
    rowName: '',
    salary: 0,
    supportCosts: 0,
  };

  function deleteHandler() {
    if (id === 0) return;
    deleteRow({ id: id });
  }

  function createHandler() {
    create({ ...rowSheme, parentId: id });
  }

  function activate() {
    setIsActive(true);
  }

  function deActivate() {
    setIsActive(false);
  }

  return (
    <div
      className={cx(
        styles.container,
        styles.level,
        styles[`level-${level}`],
        styles[depth],
        { [styles.active]: isActive }
      )}
      onMouseEnter={activate}
      onMouseLeave={deActivate}
    >
      <button className={styles.add} type="button" onClick={createHandler} />
      {isActive && (
        <button
          className={styles.remove}
          type="button"
          onClick={deleteHandler}
        />
      )}
    </div>
  );
};
