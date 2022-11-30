import React from 'react';
import styles from './Skills.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import {Skill} from './Skill/Skill';
import {Title} from '../../common/Title/Title';
import {StyleType} from '../Works/Projects';

export type SkillType = {
    id: number
    title: string
    description: string
    style: StyleType
}



type SkillsPropsType = {
    skills: SkillType[]
}

export const Skills: React.FC<SkillsPropsType> = ({skills}) => {
    return (
        <section className={styles.skills_block}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    {skills.map(s => <Skill key={s.id} title={s.title} description={s.description} style={s.style}/>)}
                </div>
            </div>
        </section>
    );
};
