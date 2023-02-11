import React, { FC } from 'react';
import * as UI from '../../ui';
import styles from './Table.module.scss';
import { outlayAPI } from '../../../services/OtlayService';

export const Table: FC = () => {
  const { data: outlays = [], isLoading } = outlayAPI.useFetchAllOutlayQuery();

  if(isLoading) return <UI.Loader />;

  return (
    <form className={styles.wrapper}>
      <table className={styles.table}>
        <UI.TableHeader />
        <tbody className={styles.body}>          
          {outlays.length ? (
            outlays.map((outlay) => (
              <UI.TableRow
                key={outlay.id}
                level={1}
                id={outlay.id}
                name={outlay.rowName}
                overheads={outlay.overheads}
                estimatedProfit={outlay.overheads}
                equipmentCosts={outlay.equipmentCosts}
                salary={outlay.salary}
                isEditingMode={false}
                child={outlay?.child}
              />
            ))
          ) : (
            <UI.TableRow isEditingMode={true} parentId={null} />
          )}
        </tbody>
      </table>
    </form>
  );
};
