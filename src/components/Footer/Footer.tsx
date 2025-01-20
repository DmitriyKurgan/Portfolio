import React from 'react';
import styles from './Footer.module.scss';
import stylesContainer from '../../common/styles/Container.module.css';
import {Title} from '../../common/Title/Title';
import gh from './../../common/Assets/gh.png';
import link from './../../common/Assets/linked.png';
import tg from './../../common/Assets/telegram.png';
import {strings} from "../../common/Utills/initialization.ts";

export const Footer = () => {
    return (
        <footer className={styles.footer_block}>
            <div className={`${stylesContainer.container} ${styles.footer_container}`}>
                <Title title={strings.footerBlock.title}/>
                <div className={styles.footer_menu}>
                    <div className={styles.footer_menu_item}><a href="#"><img
                        src={gh}/></a></div>
                    <div className={styles.footer_menu_item}><a href="https://t.me/Engineer_dima"><img
                        src={tg}/></a></div>
                </div>
                <p>{strings.footerBlock.coopyright}</p>
            </div>
        </footer>
    )
};