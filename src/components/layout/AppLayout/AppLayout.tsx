import React, {FC} from 'react';
import * as layout from '../../layout';
import styles from './AppLayout.module.scss';
import { AppLayoutProps } from './AppLayoutProps.types';


export const AppLayout: FC<AppLayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <layout.Header/>
            {children}
        </div>
    );
};


