import React from 'react';
import styles from './Footer.module.scss';
import stylesContainer from '../../common/styles/Container.module.css';
import {Title} from '../../common/Title/Title';
import gh from './../../common/Assets/gh.png';
import link from './../../common/Assets/linked.png';
import tg from './../../common/Assets/telegram.png';

export const Footer = () => {
    return (
        <footer className={styles.footer_block}>
            <div className={`${stylesContainer.container} ${styles.footer_container}`}>
                <Title title={'Dmitriy Kurgan'}/>
                <div className={styles.footer_menu}>
                    <div className={styles.footer_menu_item}><a href="https://github.com/DmitriyKurgan"><img
                        src={gh}/></a></div>
                    <div className={styles.footer_menu_item}><a href="https://www.linkedin.com/feed/"><img
                        src={link}/></a></div>
                    <div className={styles.footer_menu_item}><a href="https://t.me/Engineer_dima"><img
                        src={tg}/></a></div>
                </div>
                <p>@2022 All rights reserved</p>
            </div>
        </footer>
    )
};
