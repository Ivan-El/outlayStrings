import React, { FC, useMemo, useState } from 'react';
import { TabLinkType } from '../../ui/TabLink/TabLink.type';
import * as UI from '../../ui'
import styles from './Tabs.module.scss';


export const Tabs: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabs = useMemo<TabLinkType[]>(
    () => [
      { key: 1, title: 'Просмотр', link: '*' },
      { key: 2, title: 'Управление', link: '*' },
    ],
    []
  );

  function click (index: number): void {
    setActiveIndex(index)
  }

  return (
    <ul className={styles.tabs}>
      {tabs.map((tab, i) => (        
        <li className={styles.tab} key={tab.key}>
          <UI.TabLink title={tab.title} type={i === activeIndex ? 'active' : ''} click={click} />
        </li>
      ))}
    </ul>
  );
};
