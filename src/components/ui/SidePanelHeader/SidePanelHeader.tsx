import React, { FC } from 'react';
import { SidePanelHeaderProps } from './SidePanelHeader.types';
import styles from './SidePanelHeader.module.scss'

export const SidePanelHeader: FC <SidePanelHeaderProps> = ({caption, title}) => {
    return (
        <div className={styles.header}>
            <div  className={styles.wrapper}>
                <span>
                    {title}
                </span>
                <span className={styles.caption}>
                    {caption}
                </span>
            </div>
            <button className={styles.button} type='button' />            
        </div>
    );
};

