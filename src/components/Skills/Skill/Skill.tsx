import React from 'react';
import styles from './Skill.module.scss';

export type SkillPropsType = {
    title:string
    description:string
}

export const Skill:React.FC<SkillPropsType> = (props) => {
    const {title,description} = props
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{title}</h3>
            <span className={styles.text}>
                {description}
            </span>
        </div>
    );
};
