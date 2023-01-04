import React from 'react';
import styles from './Title.module.scss';
import {NavLink} from 'react-router-dom';


type TitlePropsType = {
    title: string
}

export const Title: React.FC<TitlePropsType> = ({title}) => {
    return (
        <div className={styles.title}>
           <NavLink to={'/'}><h2><span>{title}</span></h2></NavLink>
        </div>
    );
};

