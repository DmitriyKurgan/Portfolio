import React from 'react';
import styles from './Project..module.css';
import {Button} from '../../../common/Button/Button';
import projectImage from './../../../common/Assets/initialPrtoject.jpg'

type ProjectPropsType = {
    title: string
    description: string

}

export const Project: React.FC<ProjectPropsType> = ({title, description}) => {
    return (
        <div className={styles.project_block}>
            <div className={styles.project_image_block}>
                <a href={'#'}>Watch my project</a>
            </div>
            <div className={styles.project_description}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

