import React, {FC} from 'react';
import styles from './TableHeader.module.scss';
import cx from 'classnames';

export const TableHeader: FC = () => {
    return (        
        <thead>
          <tr>
            <th className={cx(styles.heading, styles.level)}>Уровень</th>
            <th className={cx(styles.heading, styles.works)}>
              Наименование работ
            </th>
            <th className={cx(styles.heading, styles.parametr)}>
              Основная з/п
            </th>
            <th className={cx(styles.heading, styles.parametr)}>
              Оборудование
            </th>
            <th className={cx(styles.heading, styles.parametr)}>
              Накладные расходы
            </th>
            <th className={cx(styles.heading, styles.parametr)}>
              Сметная прибыль
            </th>
          </tr>
        </thead>
    );
};
