import React from 'react';
import styles from './Footer.module.css';
import stylesContainer from '../../common/styles/Container.module.css';
import {Title} from '../../common/Title/Title';

export const Footer = () => {
    return (
        <footer className={styles.footer_block}>
            <div className={`${stylesContainer.container} ${styles.footer_container}`}>
                <Title title={'Dmitriy Kurgan'}/>
                <div className={styles.footer_menu}>
                    <div className={styles.footer_menu_item}></div>
                    <div className={styles.footer_menu_item}></div>
                    <div className={styles.footer_menu_item}></div>
                </div>
                <p>@2022 All rights reserved</p>
            </div>
        </footer>)
};
