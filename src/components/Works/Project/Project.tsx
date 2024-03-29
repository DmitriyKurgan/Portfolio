import React, {memo} from 'react';
import {StyleType} from '../Projects';
import styles from './Project.module.scss'
import {strings} from "../../../common/Utills/initialization.ts";


type ProjectPropsType = {
    title: string
    description: string
    style: StyleType
    link: string
}

export const Project: React.FC<ProjectPropsType> = memo(({title, description, style, link}) => {
    return (
        <div className={styles.project_block}>
            <div className={styles.project_image_block} style={style}>
                <a href={link}>{strings.projectsBlock.watchLink}</a>
            </div>
            <div className={styles.project_description}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
});

