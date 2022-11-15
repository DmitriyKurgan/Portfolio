import React from 'react';
import styles from './Skills.module.scss';
import stylesContainer from './../../common/styles/Container.module.css';
import {Skill} from './Skill/Skill';
import {Title} from '../../common/Title/Title';

export type SkillType = {
    id: number
    title: string
    description: string
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
                    {skills.map(s => <Skill key={s.id} title={s.title} description={s.description}/>)}
                </div>
            </div>
        </section>
    );
};
