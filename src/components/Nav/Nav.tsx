import React from 'react';
import styles from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="#">Main</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contacts-block">Contacts</a>
        </div>
    );
};

