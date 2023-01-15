import React, {FC} from 'react';
import styles from './Header.module.scss';
import {Nav} from '../Nav/Nav';

type HeaderType = {
    initializeAppLanguage: (initialize: string) => void
}

export const Header: FC<HeaderType> = ({initializeAppLanguage}) => {
    return (
        <header className={styles.header}>
            <Nav initializeAppLanguage={initializeAppLanguage}/>
        </header>
    );
};


