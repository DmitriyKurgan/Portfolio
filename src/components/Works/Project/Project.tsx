import React from 'react';
import {StyleType} from '../Projects';
import styles from './Project.module.scss'


type ProjectPropsType = {
    title: string
    description: string
    style: StyleType
}

export const Project: React.FC<ProjectPropsType> = ({title, description, style}) => {
    return (
        <div className={styles.project_block}>
            <div className={styles.project_image_block} style={style}>
                <a href={'#'}>Watch my project</a>
            </div>
            <div className={styles.project_description}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

