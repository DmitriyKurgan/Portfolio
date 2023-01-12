import React from 'react';
import styles from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="#skills">My skills</a>
            <a href="#projects">My projects</a>
            <a href="#contacts-block">Contact me</a>
        </div>
    );
};

