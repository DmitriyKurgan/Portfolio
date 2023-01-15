import React, {FC, useState} from 'react';
import styles from './Nav.module.scss';
import {strings} from "../../common/Utills/initialization.ts";
import lang from './../../common/Assets/lang.png';

type NavType = {
    initializeAppLanguage: (initialize: string) => void
}

export const Nav: FC<NavType> = ({initializeAppLanguage}) => {
    const [isDropped, setIsDropped] = useState<boolean>(false);

    const onInitializeHandler = (value: string) => {
        initializeAppLanguage(value.toLowerCase())
    }

    const activateDroppedMenu = () => {
        setIsDropped(true)
    }
    const dectivateDroppedMenu = () => {
        setIsDropped(false)
    }
    return (
        <>
            <div className={styles.nav}>
                <a href="#skills">{strings.mySkills}</a>
                <a href="#projects">{strings.myProjects}</a>
                <a href="#contacts-block">{strings.contact}</a>
                <a href="#">
                    <div className={styles.initializeBlock} onMouseLeave={dectivateDroppedMenu}>
                        <img
                            onMouseEnter={activateDroppedMenu}
                            src={lang}/>
                        {isDropped && <nav className={styles.dropdownWrapper}>
                            <ul className={styles.dropdownMenu}>
                                <li className={styles.dropdownItem}><a href="#"
                                                                       onClick={(e) => onInitializeHandler(e.currentTarget.outerText)}>Eng</a>
                                </li>
                                <li className={styles.dropdownItem}><a href="#"
                                                                       onClick={(e) => onInitializeHandler(e.currentTarget.outerText)}>Ru</a>
                                </li>
                            </ul>
                        </nav>}
                    </div>
                </a>

            </div>

        </>
    );
};

