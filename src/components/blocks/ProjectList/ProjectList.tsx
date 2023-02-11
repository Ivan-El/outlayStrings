import React, { FC } from 'react';
import { ProjectListProps } from './ProjectList.types';
import styles from './ProjectList.module.scss';
import { Link } from 'react-router-dom';
import cx from 'classnames';

export const ProjectList: FC<ProjectListProps> = ({
  list,
  current,
  change,
}) => {
  function clickHandler(evt: React.MouseEvent) {
    evt.preventDefault();
    change(4);
  }

  return (
    <ul className={styles.list}>
      {list.map((item, i) => (
        <li className={styles.item} key={item.key}>
          <Link
            to={''}
            className={cx(styles.link, styles[i === current ? 'active' : ''])}
            onClick={clickHandler}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
