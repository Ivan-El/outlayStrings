import React, { FC } from 'react';
import styles from './SidePanel.module.scss'
import { SidePanelProps } from './SidePanel.types';


export const SidePanel: FC <SidePanelProps>= ({children}) => {
    return (
        <div className={styles.panel}>
            {children}
        </div>
    );
};