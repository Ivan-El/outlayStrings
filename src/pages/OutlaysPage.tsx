import React, { FC, useMemo, useState } from 'react';
import styles from './OutlaysPage.module.scss';
import * as Layout from '../components/layout';
import * as Blocks from '../components/blocks/';
import * as UI from '../components/ui';

const OutlaysPage: FC = () => {
  const [current, setcurrent] = useState<number>(4);

  const projects = useMemo<Blocks.IProject[]>(
    () => [
      { key: 1, title: 'По проекту' },
      { key: 2, title: 'Объекты' },
      { key: 3, title: 'РД' },
      { key: 4, title: 'МТО' },
      { key: 5, title: 'СМР', fullname: 'Строительно-монтажные работы' },
      { key: 6, title: 'График' },
      { key: 7, title: 'МиМ' },
      { key: 8, title: 'Рабочие' },
      { key: 9, title: 'Капвложения' },
      { key: 10, title: 'Бюджет' },
      { key: 11, title: 'Финансирование' },
      { key: 12, title: 'Панорамы' },
      { key: 13, title: 'Камеры' },
      { key: 14, title: 'Поручения' },
      { key: 15, title: 'Контрагенты' },
    ],
    []
  );

  const currentProjectName = projects.length
    ? projects[current].fullname || projects[current].title
    : 'Добавить проект';

  return (
    <main className={styles.container}>
      <Blocks.SidePanel>
        <UI.SidePanelHeader title="Название проекта" caption="Аббревиатура" />
        <Blocks.ProjectList
          list={projects}
          current={current}
          change={setcurrent}
        />
      </Blocks.SidePanel>
      <Layout.TableWrapper>
        <UI.TableName name={currentProjectName} />
        <Blocks.Table />
      </Layout.TableWrapper>
    </main>
  );
};

export default OutlaysPage;
