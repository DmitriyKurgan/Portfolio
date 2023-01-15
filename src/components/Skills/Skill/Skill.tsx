import React, {memo} from 'react';
import styles from './Skill.module.scss';
import {StyleType} from '../../Works/Projects';

export type SkillPropsType = {
    title: string
    description: string
    style: StyleType
    }

export const Skill: React.FC<SkillPropsType> = memo(({title, description, style}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.project_image_block} style={style}></div>
            <h3>{title}</h3>
            <span className={styles.text}>
                {description}
            </span>
        </div>
    );
});
