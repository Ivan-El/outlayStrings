import React, {FC} from 'react';
import styles from './Header.module.scss'
import * as UI from '../../ui/';
import * as Blocks from '../../blocks';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <UI.MenuButton />
            <UI.GoBackLink />            
            <Blocks.Tabs />
        </header>
    );
};